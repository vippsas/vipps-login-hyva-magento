module.exports = {
    content: [
        '../templates/**/*.phtml',
        '../layout/**/*.xml',
        './components/*.css'
    ],
    options: {
        safelist: [
            'text-vipps',
            'text-mobilepay'
        ]
    },
    theme: {
        extend: {
            colors: {
                'vipps': '#ff5b24',
                'mobilepay': '#5A78FF'
            }
        }
    }
}
