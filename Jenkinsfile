node {

    
    agent {
        docker { image 'node:7-alpine' }
    }

    stages{
        stage('test'){

        
            checkout scm

            docker.withRegistry('https://registry.hub.docker.com', 'dockerhubcredentials') {

                def customImage = docker.build("bendupont/WITC").inside{}

                customImage.push()
            }
        }
    }
        
}