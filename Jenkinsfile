pipeline {
    agent any

    environment {
        IMAGE_NAME = "delivery-pagamento"
        CONTAINER_NAME = "delivery-pagamento"
        APP_PORT = "9524"

        // Infisical
        INFISICAL_CLIENT_ID = "02459d73-c3fc-46ee-8827-14134b5a0d10"
        INFISICAL_CLIENT_SECRET = "b45e291c25a93e55891609c1df8342a427d9061ffe28adb4b1e558989d8c1c75"
        INFISICAL_PROJECT_ID = "33d7fe2b-ed71-41a9-951e-0d448894e72d"
        INFISICAL_ENV = "production"
    }

    stages {
        stage('Stop and Remove Old Container') {
            steps {
                script {
                    echo 'Limpando containers e imagens antigas...'
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                }
            }
        }

        stage('Install and Prisma Generate') {
            steps {
                echo 'Preparando dependências e gerando cliente do Prisma usando Infisical...'

                sh '''
                    npm install

                    # Instala o Infisical CLI localmente no projeto, sem precisar de sudo/root
                    npm install --no-save @infisical/cli

                    set +x
                    export INFISICAL_TOKEN=$(./node_modules/.bin/infisical login \
                        --method=universal-auth \
                        --client-id="$INFISICAL_CLIENT_ID" \
                        --client-secret="$INFISICAL_CLIENT_SECRET" \
                        --silent \
                        --plain)

                    ./node_modules/.bin/infisical run \
                        --projectId="$INFISICAL_PROJECT_ID" \
                        --env="$INFISICAL_ENV" \
                        -- npx prisma generate
                    set -x
                '''
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

                sh '''
                    # Garante que a CLI local do Infisical existe
                    if [ ! -f ./node_modules/.bin/infisical ]; then
                        npm install --no-save @infisical/cli
                    fi

                    set +x
                    export INFISICAL_TOKEN=$(./node_modules/.bin/infisical login \
                        --method=universal-auth \
                        --client-id="$INFISICAL_CLIENT_ID" \
                        --client-secret="$INFISICAL_CLIENT_SECRET" \
                        --silent \
                        --plain)

                    ./node_modules/.bin/infisical export \
                        --projectId="$INFISICAL_PROJECT_ID" \
                        --env="$INFISICAL_ENV" \
                        --format=dotenv > .env
                    set -x

                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        --env-file .env \
                        -p ${APP_PORT}:${APP_PORT} \
                        ${IMAGE_NAME}:latest

                    rm -f .env
                '''
            }
        }


    post {
        success {
            echo 'Pipeline executado com sucesso! O serviço está rodando.'
        }
        failure {
            echo 'Erro no pipeline. Verifique os logs do Docker ou do Prisma.'
            sh "docker logs ${CONTAINER_NAME} || true"
        }
    }
}
