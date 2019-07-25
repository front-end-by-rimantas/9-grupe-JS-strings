"use strict";

const services = [ {title: 'a'}, {title: 'b'}, {title: 'c'} ];
const serviceHTML = `<div class="service">
                        <h3>title</h3>
                    </div>`;

const testimonials = [ {text: 'a'}, {text: 'b'}, {text: 'c'} ];
const testimonialHTML = `<div class="testimonial">
                            <h3>text</h3>
                        </div>`;

const footerIcons = [ {icon: 'facebook', link: '#'},
                      {icon: 'twitter', link: '#'},
                      {icon: 'instagram', link: '#'} ];
const footerIconsHTML = `<a href=link class="fa fa-icon"></a>`;

function generate( target, data, html_template ){
    let HTML = '';

    data.forEach( item => {
        HTML += `html_template <--> ${item}`;
    });

    return document.querySelector(target).innerHTML = HTML;
}

generate('#services_block', services, serviceHTML);
generate('#testimonials_block', testimonials, testimonialHTML);
generate('#footer', footerIcons, footerIconsHTML);