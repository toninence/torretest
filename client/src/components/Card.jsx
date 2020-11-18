import React, { Link } from 'react';
import styled from 'styled-components';
import styles from './card.module.css'
import { useTrail, a } from 'react-spring'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function Trail({ open, children, ...props }) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 220 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 10,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <>
                {trail.map(({ x, height, ...rest }, index) => (
                    <a.div
                        key={items[index]}
                        className="trails-text"
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                        <a.div>{items[index]}</a.div>
                    </a.div>
                ))}
            </>
    )
}

export default function Card({ data }) {

    const Card = styled.div`
    width: 90%;
    min-height: 450px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    color: white;
    margin: 10px auto;
    padding: 15px;
    box-shadow: -2px -2px 6px #383b40,6px 6px 6px rgba(0,0,0,.24);
    display: flex;
    flex-direction: row;
    `;
    const Avatar = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 55px;
    margin: 0 auto;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    `;
    const Title = styled.p`
    font-size: 1.3rem;
    margin-bottom: 0;
    `;
    const Subtitle = styled.p`
    font-size: 0.8rem;    
    margin-top: 0
    `;
    const Sumary = styled.p`
    font-size: 0.8rem;    
    margin-top: 0
    `;
    const Line = styled.hr`
    width: 1px;
    position: relative;
    height: 430px;
    `;
    const Link = styled.a`
    text-decoration: none;
    margin-right: 10px;
    color: inherit;
    &:visited: {color: inherit}
    &:hover {
        color: rgba(255,255,255,0.5); 
      }    
    `;
    const CardContent = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row;
    border-right: 1px solid black;
    padding: 10px;
    `;
    const Habilities = styled.button`
    display: inline-block;
    width: min-content;
    border-radius: 19px;
    border: none;
    background-color: rgba(0,0,0,0.2);
    color: white;
    margin-top: 10px;
    margin-right: 8px;
    padding: 5px 15px;
    &:hover {
        background-color: rgba(0,0,0,0.7); 
      };
    transition: all 0.8s;
    `;
    const firstLetter = text => {
        text = text.split(/\n/);
        console.log(text)
        //return text
        return <Trail open={true}>
            {text.map((text, index) => {
                if (index === 0) return (<><span key={index} style={{ fontSize: '1.5rem' }}> {text.charAt(0)}</span> {text.substr(1)}<br /></>)
                return <span key={index} >{text}<br /></span>
            }
            )}
        </Trail>
    }

    const { name, professionalHeadline, picture, pictureThumbnail, location, summaryOfBio, links } = data.person
    const { strengths } = data
    return (
        <Card >
            <CardContent>
                <div>
                    <Line />
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <Avatar img={pictureThumbnail} />
                    <Title>{name}</Title>
                    <Subtitle>{professionalHeadline}</Subtitle>
                    <Sumary>{firstLetter(summaryOfBio)}</Sumary>
                    {links.map(link => {
                        switch (link.name) {
                            case 'linkedin':
                                return <Link href={link.address} target='_blank'><span style={{ fontSize: '1.5rem' }}><FaLinkedin /></span></Link>
                            case 'github':
                                return <Link href={link.address} target='_blank'><span style={{ fontSize: '1.5rem' }}><FaGithubSquare /></span></Link>
                        }

                    })}
                </div>
            </CardContent>
            <CardContent>
                <div style={{display: "flex", flexDirection: "column"}}>
                <Title style={{textAlign: 'center'}}>
                    Habilidades Actuales
                </Title>
                <div style={{display: "flex", flexDirection: "row", flexWrap: 'wrap'}}>
                <Trail open={true}>
                   {strengths && strengths.map( strength => {
                    return <Habilities>{strength.name}</Habilities>
                })}
                </Trail>
                </div>
                
                </div>
            </CardContent>
        </Card >
    )

}


