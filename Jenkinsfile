pipeline {
    agent any

    environment {
        // Nome da imagem e do container baseados no seu projeto
        IMAGE_NAME = "delivery-pagamento"
        CONTAINER_NAME = "delivery-pagamento"
        // Porta que o seu Fastify utiliza
        APP_PORT = "9524"
        DATABASE_URL="mysql://20261_projint5_manha:senac@12938@edumysql.acesso.rj.senac.br:3306/20261_projint5_manha_delivery_pagamento"
        INFISICAL_PROJECT_ID = "e2ce3300-d12b-471d-8954-364aa184c184"
        INFISICAL_ENV        = "prod"
        INFISICAL_TOKEN      = "st.78331314-da2c-40d7-829c-64e1baa1a4a8.ce97554862d25689b83e5730d93756e7.5a84652d45eb8c9411c301ab944e9012"
    }

    stages {
        stage('Stop and Remove Old Container') {
            steps {
                script {
                    echo 'Limpando containers e imagens antigas...'
                    // O "|| true" evita que o pipeline pare se o container não existir
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                    sh "docker rmi ${IMAGE_NAME}:latest || true"
                }
            }
        }

        stage('Install and Prisma Generate') {
            steps {
                echo 'Preparando dependências e Prisma...'
                sh 'npm install'
                sh "DATABASE_URL='${DATABASE_URL}' npx prisma generate"
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
                echo 'Subindo o microserviço...'
                
                sh "docker run -d --name ${CONTAINER_NAME} -p ${APP_PORT}:${APP_PORT} ${IMAGE_NAME}:latest"
            }
        }
        
        stage('Healthcheck') {
            steps {
                echo 'Verificando se o Fastify subiu corretamente...'
                sleep 5
                sh "curl -f http://localhost:${APP_PORT}/health || echo 'Aguardando serviço...'"
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
