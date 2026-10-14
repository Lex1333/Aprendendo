//Criação de um uma timeline do GSAP com animações sincronizadas com o scroll
gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 60%",
        scrub: true,
        markers: true
    }
});

timeline
    .to("#fanta", {
        top: "120%", //MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        left: '0%', 
        
    },
    'orange'
)

 timeline.to("#laranja-cortada", 
    {
        top: "160%",
        left: '23%',
    },
    'orange'
);
 timeline.to("#laranja", 
    {
        width: '15%',
        top: "160%",
        left: '80%',
    },
    'orange'
);
 timeline.to("#folha", 
    {
        top: "110%",
        rotate: '370deg',
        left: '70%',
    },
    'orange'
);

 timeline.to("#folha2", 
    {
        top: "110%",
        rotate: '530deg',
        left: '0%',
    },
    'orange'
);


//criando outra timeline

var timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%", // Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .three)
        scrub: true,
        markers: true,
    }
});

timeline2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        top: '110%',
        left: '-100%',
    },
    "ca"
);

timeline2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        top: '110%',
        left: '-100%',
    },
    'ca'
);

timeline2.from(
    '.lemon2',
    {
        rotate: '90deg',
        top: '110%',
        left: '100%',
    },
    'ca'
);
timeline2.from(
    '#pepsi',
    {
        rotate: '90deg',
        top: '110%',
        left: '100%',
    },
    'ca'
);

timeline2.from(
    '#fanta2',
    {
        rotate: '90deg',
        top: '110%',
        left: '100%',
    },
    'ca'
);

timeline2.from(
    '.lemon3',
    {
        rotate: '90deg',
        top: '110%',
        left: '100%',
    },
    'ca'
);