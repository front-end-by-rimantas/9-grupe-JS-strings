"use strict";

const services = [ {title: 'service a'}, {title: 'service b'}, {title: 'service c'} ];
const serviceHTML = `<div class="service">
                        <h3>title</h3>
                    </div>`;

const testimonials = [ {text: 'testimonial a'}, {text: 'testimonial b'}, {text: 'testimonial c'} ];
const testimonialHTML = `<div class="testimonial">
                            <h3>text</h3>
                        </div>`;

const footerIcons = [ {icon: 'facebook', link: '#facebook'},
                      {icon: 'twitter', link: '#twitter'},
                      {icon: 'instagram', link: '#instagram'} ];
const footerIconsHTML = `<a href=link class="fa fa-icon">Link</a>`;

const batai = [ {size: 42, color: 'red', brand: 'niiike'},
                {size: 44, color: 'white', brand: 'adike'},
                {size: 39, color: 'random', brand: 'rabok'}];
const bataiHTML = `<div class="batas">
                        <h3>brand</h3>
                        <span>size</span>
                        <span>color</span>
                    </div>`;

function generate( target, data, html_template ){
    let HTML = '',
        template = '';
    const keywords = Object.keys( data[0] );

    data.forEach( item => {
        template = html_template;
        
        keywords.forEach( keyword => {
            template = template.replace( keyword, item[keyword] );
        });
        
        HTML += template;
    });

    return document.querySelector(target).innerHTML = HTML;
}

generate('#services_block', services, serviceHTML);
generate('#testimonials_block', testimonials, testimonialHTML);
generate('#footer', footerIcons, footerIconsHTML);
generate('#batai', batai, bataiHTML);