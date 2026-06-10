pipeline {
    agent any

    environment {
        IMAGE_NAME = "delivery-pagamento"
        CONTAINER_NAME = "delivery-pagamento"
        APP_PORT = "9524"

        // Credenciais do Infisical
        INFISICAL_CLIENT_ID = "02459d73-c3fc-46ee-8827-14134b5a0d10"
        INFISICAL_CLIENT_SECRET = "b45e291c25a93e55891609c1df8342a427d9061ffe28adb4b1e558989d8c1c75"
    }

    stages {
        stage('Stop and Remove Old Container') {
            steps {
                script {
                    echo 'Limpando containers e imagens antigas...'
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                    sh "docker rmi ${IMAGE_NAME}:latest || true"
                }
            }
        }

        stage('Install and Prisma Generate') {
            steps {
                echo 'Preparando dependências e gerando cliente do Prisma usando Infisical...'
                sh 'npm install'
                // Autentica e injeta as variáveis do ambiente (ex: production) para o Prisma
                sh "infisical run --client-id=${INFISICAL_CLIENT_ID} --client-secret=${INFISICAL_CLIENT_SECRET} --env=production -- npx prisma generate"
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Construindo a nova imagem Docker...'
                sh "docker build -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Docker Run') {
            steps {
                echo 'Subindo o microserviço com injeção de variáveis...'
                // Exporta as variáveis do Infisical e as passa para dentro do container Docker
                sh """
                infisical export --client-id=${INFISICAL_CLIENT_ID} --client-secret=${INFISICAL_CLIENT_SECRET} --env=production --format=dotenv > .env
                docker run -d --name ${CONTAINER_NAME} --env-file .env -p ${APP_PORT}:${APP_PORT} ${IMAGE_NAME}:latest
                rm .env
                """
            }
        }
        
        stage('Healthcheck') {
            steps {
                echo 'Verificando se o Fastify subiu corretamente...'
                // Aguarda o processo inicializar antes de testar
                sleep 5
                // Sem o '|| echo', se falhar o curl, o pipeline falha corretamente
                sh "curl -f http://localhost:${APP_PORT}/health"
            }
        }
    }

    post {
        success {
            echo 'Pipeline executado com sucesso! O serviço está rodando.'
        }
        failure {
            echo 'Erro no pipeline. Verifique os logs do Docker ou do Prisma.'
        }
    }
}
