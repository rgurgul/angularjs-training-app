angular
    .module(MODULES.DIRECTIVES.UPLOAD, [MODULES.THIRD_PARTY.NG_FILE_UPLOAD])
    .component('uploadDctv', {
        bindings: {
            model: "=",
            required: "<"
        },
        require: {
            form: "^form"
        },
        templateUrl: TEMPLATES.DIRECTIVES.UPLOAD,
        controller: function (Upload, CONFIG) {

            var self = this;

            this.file$ = new Rx.Subject();

            this.file$
                .subscribe(function (file) {
                    Upload
                        .upload({
                            url: CONFIG.API_PREFIX + 'file.php',
                            file: file
                        })
                        .progress(function (evt) {
                            self.percent = (evt.loaded / evt.total * 100).toFixed();
                        })
                        .success(function (data) {
                            self.model = data.file;
                        });
                });
        }
    });