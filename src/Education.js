import React from 'react'

const EducationItem=(data)=>
    data.map(item =>
        (
            <div className="row">
                <div className="col-3 logo">
                <img src={item.logo}/>

                </div>
                <div className="col-9">
                    <h1>{item.name}</h1>
                </div>


            </div>
        )


    )



const university = [{
    name: 'Monash University',
    year: '2017-2018',
    degree: 'Bachelor of I.T.',
    major: 'Software Development',
    wam: '78',
    logo: require('./img/monash.png')
},
    {
        name: 'Curtin University',
        year: '2011-2014',
        degree: 'Bachelor of Engineering',
        major: 'Mining Engineering',
        wam: '67',
        logo: require('./img/curtin.png')
    }]


class Education extends React.Component {
    render() {
        return (
            <div>
                {EducationItem(university)}

            </div>
        )
    }
}

export default Education