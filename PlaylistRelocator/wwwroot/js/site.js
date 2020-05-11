(function () {
    //main class container for all other services
    class PageComponent {
        static apiBaseUri = "/api/"

        constructor() {
            var options = {
                hubDescriorions: this.getAvailable()
            }

            this.SourceHub = new SourceHub(options)
            this.TargetHub = new TargetHub(options)
        }

         getAvailable() {
            //вызвать и получить данные методом GET по адрессу/api/Hubs/GetAllDescriptions
            //отрисовать полученные данные в методе render() 
            //если HubDescriptions уже заполнен, то просто вернуть, не делая запроса на сервер

            //this.HubDescriptions = await fetch(бла бла)
            //render()
            return null;
        }
    }

    //логика для первого хаба
    class SourceHub  {
        constructor(options) {
            this.HubDescriorions = options.hubDescriorions;

        }
    }

    //логика для второго хаба
    class TargetHub  {
        constructor(options) {
            this.HubDescriorions = options.hubDescriorions;
        }
    }


    //Entry point
    new PageComponent()
})();



