'use strict';

function Picture(item) {
    this.title = item.title;
    this.image_url = item.image_url;
    this.description = item.description;
    this.keyword = item.keyword;
    this.horns = item.horns;
}

Picture.prototype.displayPic = function () {
    let template = $('.photo-template').clone();
    $('main').append(template);
    template.find('h2').text(this.title);
    template.find('img').attr('src', this.image_url);
    template.find('p').text(this.description);
    template.removeClass('photo-template');
};

Picture.readJson = () => {
    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
    };


    $.ajax('data/data.json', ajaxSettings)
        .then(data => {
            console.log(data);
            data.forEach((item) => {
                let newPic = new Picture(item);
                newPic.displayPic();
            });
        });
};

$(() => Picture.readJson());
