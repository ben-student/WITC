pipeline {
  agent any
  tools {nodejs "815Node"}
  environment {
    registry = 'ben-student/ben-student'
    registryCredential = 'dockerhubcredentials'
  }
  stages {
    stage('INSTALL PACKAGES') {
      steps {
        sh "npm install"
      }
    }
    stage('TEST') {
      steps {
        echo "insert your testing here"
      }
    }
    stage('BUILD APP') {
      steps {
        sh "node_modules/.bin/ng build --prod"
      }
    }
    stage("BUILD DOCKER") {
      steps {
        script {
          dockerImageBuild = docker.build registry + ":latest"
        }
      }
    }
     stage("DEPLOY DOCKER") {
       steps {
          script {
            docker.withRegistry('', registryCredential) {
              dockerImageBuild.push()
            }
         }
      }
   }
    stage("DEPLOY & ACTIVATE") {
      steps {
        docker build -t --name WITC_image .
        docker run --name WITC -d -p 80:80 WITC_image 
        //docker run -d -p 443:443 username/repository
    }
  }
}