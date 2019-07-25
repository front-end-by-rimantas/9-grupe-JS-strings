"use strict";

const services = [ {title: 'service a'}, {title: 'service b'}, {title: 'service c'} ];

const testimonials = [ {text: 'testimonial a'}, {text: 'testimonial b'}, {text: 'testimonial c'} ];

const footerIcons = [ {icon: 'facebook', link: '#facebook'},
                      {icon: 'twitter', link: '#twitter'},
                      {icon: 'instagram', link: '#instagram'} ];

const batai = [ {size: 42, color: 'red', brand: 'niiike'},
                {size: 44, color: 'white', brand: 'adike'},
                {size: 39, color: 'random', brand: 'rabok'}];


function generate( target, data ){
    let HTML = '',
        html_template = document.querySelector(`${target} > script`).innerHTML,
        template = '';
    const keywords = Object.keys( data[0] );

    data.forEach( item => {
        template = html_template;
        
        keywords.forEach( keyword => {
            template = template.replace( '{{'+keyword+'}}', item[keyword] );
        });
        
        HTML += template;
    });

    return document.querySelector(target).innerHTML = HTML;
}

generate('#services_block', services);
generate('#testimonials_block', testimonials);
generate('#footer', footerIcons);
generate('#batai', batai);