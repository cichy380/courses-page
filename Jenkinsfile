pipeline {
  agent any

  environment {
    IMAGE_NAME = 'marcindobroszek/szkolenia'
    REGISTRY_CREDENTIAL = 'marcindobroszek'
  }

  stages {
    stage('git cloning project') {
      steps {
        git branch: 'main', credentialsId: 'githubMarcinCredential', url: 'git@github.com:cichy380/courses-page.git'
      }
    }
    stage('docker run nodejs') {
      agent {
        docker {
          image 'node:15.8.0-stretch'
          reuseNode true
        }
      }

      stages {
        stage('docker build image') {
          steps {
            sh 'docker build -f "Dockerfile" -t $IMAGE_NAME:$BUILD_NUMBER -t $IMAGE_NAME:latest .'
          }
        }

        stage('docker publish image') {
          steps {
            withDockerRegistry([credentialsId: 'dockerhubMarcinCredential', url: '']) {
              sh 'docker push $IMAGE_NAME:$BUILD_NUMBER'
              sh 'docker push $IMAGE_NAME:latest'
              sh 'docker service update --with-registry-auth --image $IMAGE_NAME:latest szkolenia_frontend'
            }
          }
        }

        stage('cleaning up') {
          steps {
            sh 'docker rmi $IMAGE_NAME:$BUILD_NUMBER'
          }
        }
      }
    }
  }
}
