node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhubcredentials') {

        def customImage = docker.build("bendupont/WITC").inside{}

        customImage.push()
    }
        
}