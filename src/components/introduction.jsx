import React, { useRef, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect'
import './introduction.css'
import { Typography } from '@mui/material';
import waterloo from '../images/waterloo.png';
import uhndata from '../images/uhndata.png';
import rcmpiano from '../images/rcmpiano.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const Introduction = () => {
    const myRef = useRef()
    const [visible, setVisible] = useState()
    // const [isMobile, setIsMobile] = useState(false)
 
    // //choose the screen size 
    // const handleResize = () => {
    //     if (window.innerWidth < 760) {
    //         setIsMobile(true)
    //     } else {
    //         setIsMobile(false)
    //     }
    // }

    // // create an event listener
    // useEffect(() => {
    //     window.addEventListener("resize", handleResize)
    // })
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])

    const schoolCard = () => {
        return (
            <>
                <div style={{
                    position: 'relative',
                    justifyContent: 'center',
                }}>
                    <Typography style={{
                        fontSize: '3em',
                        fontWeight: 'bold',
                        fontFamily: 'Poppins',
                        textAlign: 'center',
                        color: 'grey',
                        textShadow: '2px 2px black',
                    }}>
                        Education
                    </Typography>
                    <img src={waterloo} style={{
                        borderRadius: '50px',
                        height: '40%',
                        width: '40%',
                        position: 'relative',
                        left: `30%`,
                        marginTop: '2%',
                    }} />
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        University of Waterloo mathematics student with co-op, class of 2026
                    </Typography>
                </div>
            </>
        )
    }

    const uhnCard = () => {
        return (
            <>
                <div style={{
                    position: 'relative',
                    justifyContent: 'center',
                }}>
                    <Typography style={{
                        fontSize: '3em',
                        fontWeight: 'bold',
                        fontFamily: 'Poppins',
                        textAlign: 'center',
                        color: 'grey',
                        textShadow: '2px 2px black',
                    }}>
                        UHN Data Intern
                    </Typography>
                    <img src={uhndata} style={{
                        position: 'relative',
                        scale: '0.7',
                        height: '50%',
                        width: '80%',
                        left: `10%`,
                        marginTop: '2%',
                    }} />
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        Software Developer internship at the University Health Network Data Team
                    </Typography>
                </div>
            </>
        )
    }

    const musicCard = () => {
        return (
            <>
                <div style={{
                    position: 'relative',
                    justifyContent: 'center',
                }}>
                    <Typography style={{
                        fontSize: '3em',
                        fontWeight: 'bold',
                        fontFamily: 'Poppins',
                        textAlign: 'center',
                        color: 'grey',
                        textShadow: '2px 2px black',
                    }}>
                        Music
                    </Typography>
                    <img src={rcmpiano} style={{
                        height: '50%',
                        width: '50%',
                        left: `25%`,
                        position: 'relative',
                        marginTop: '2%',
                    }} />
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        Piano for 15+ years, completed RCM Grade 10. 6+ years of concert band
                    </Typography>
                </div>
            </>
        )
    }

    const doordashStartup = () => {
        return (
            <>
                <div style={{
                    position: 'relative',
                    justifyContent: 'center',
                }}>
                    <Typography style={{
                        fontSize: '3em',
                        fontWeight: 'bold',
                        fontFamily: 'Poppins',
                        textAlign: 'center',
                        color: 'grey',
                        textShadow: '2px 2px black',
                    }}>
                        Doordash Startup Project
                    </Typography>
                    <Typography style={{
                        fontSize: '25px',
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}>
                        Fullstack developer of a Doordash startup project
                    </Typography>
                </div>
            </>
        )
    }

    return (
        <>
            <div id="introduction" style={{
                minHeight: '100vh',
                width: '100%',
                outline: '1px solid #D3D3D3',
                position: 'relative',
                borderBottom: '1px solid #D3D3D3',
            }}>
                <Typography className={`${visible ? "show" : "hidden"}`} variant='h2' style={{
                    fontWeight: 'bold',
                    fontFamily: 'Abril Fatface',
                    marginBottom: '60px',
                    left: '15%',
                    top: '15vh',
                    position: 'relative',
                    maxWidth: '50%'
                }}>
                    Hi I'm Eric
                </Typography>
                <div ref={myRef} style={{
                    position: 'relative',
                    width: '75%',
                    margin: 'auto',
                    top: '20vh',
                    marginBottom: '30vh'
                }}>
                    <Grid container spacing={3} className={`${visible ? "show" : "hidden"}`}>
                        <Grid xs style={{
                            backgroundColor: 'white',
                            marginRight: '20px',
                            border: '2px solid #D3D3D3',
                            minWidth: isMobile ? '70%' : '',
                            marginBottom: isMobile ? '3vh' : ''
                        }}>
                            {schoolCard()}
                        </Grid>
                        <Grid xs style={{
                            backgroundColor: 'white',
                            border: '2px solid #D3D3D3',
                            minWidth: isMobile ? '70%' : '',
                            marginBottom: isMobile ? '3vh' : ''
                        }}>
                            {uhnCard()}
                        </Grid>
                        <Grid xs style={{
                            backgroundColor: 'white',
                            marginLeft: '20px',
                            border: '2px solid #D3D3D3',
                            minWidth: isMobile ? '70%' : '',
                            marginBottom: isMobile ? '3vh' : ''
                        }}>
                            {musicCard()}
                        </Grid>
                        <Box width="100%" style={{marginBottom: '3vh'}}/>
                        <Grid xs={4} item style={{
                            backgroundColor: 'white',
                            border: '2px solid #D3D3D3',
                            minWidth: isMobile ? '70%' : '',
                            marginBottom: isMobile ? '3vh' : '',
                            margin: 'auto'
                        }}>
                            {doordashStartup()}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Introduction