interface IResult {
    ParticleView: {
        props: {
            maxParticleCount?: string,
            minParticleCount?: string,
            minDelay?: string,
            maxDelay?: string,
            maxDuration?: string,
            minDuration?: string,
            state?: string,
            flipY?: string,
            scaleY?: string,
            scaleX?: string,
            depth?: string,
            additive?: string,
            aligned?: string,
            attached?: string,
            continuous?: string,
            enabledPositioning?: string,
            minOffsetX?: string,
            minOffsetY?: string,
            offsetX?: string,
            offsetY?: string,
            premultipliedAlpha?: string,
            rotation?: string,
        },
        childs: {
            images?: {
                props: {},
                childs: {
                    image: {
                        src: string,
                    }
                }
            },
            lifeOffset?: {
                props: {
                    active?: boolean,
                    relative?: string,
                    highMin?: string,
                    highMax?: string,
                    lowMax?: string,
                    lowMin?: string,
                },
                childs: {},
            },
            life?: {
                props: {
                    lowMin?: string,
                    lowMax?: string,
                    highMax?: string,
                    highMin?: string,
                    relative?: boolean,
                },
                childs: {
                    properties: [
                        IProperties
                    ]
                }
            },
            emission?: {
                props: {
                    relative?: boolean,
                    highMin?: string,
                    highMax?: string,
                    lowMax?: string,
                    lowMin?: string,
                },
                childs: {
                    properties: [
                        IProperties
                    ]
                },

            },
            angle?:{
                props: {
                    lowMin?: string,
                    lowMax?: string,
                    highMax?: string,
                    highMin?: string,
                    relative?: string,
                    active?: string,
                },
                childs: {
                    properties: [
                        IProperties
                    ]
                }
            },
            gravity?: {
                props: {
                    active?: string,
                    relative?: string,
                    highMin?: string,
                    highMa?: string,
                    lowMax?: string,
                    lowMin?: string,
                },
                childs: {
                    properties: [
                        IProperties
                    ]
                }
            },
            rotation?: {
                props: {
                    active?: string,
                    relative?: string,
                    highMin?: string,
                    highMax?: string,
                    lowMax?: string,
                    lowMin?: string,
                },
                childs: {
                    properties: [
                        IProperties
                    ]
                }
            },
            scaleY?: {
                props: {
                    relative?: string,
                    highMin?: string,
                    highMax?: string,
                    lowMax?: string,
                    lowMin?: string,
                    active?: string,
                },
                childs: {
                    properties: [
                        IProperties
                    ]
                }
            },
            scaleX?:{
                props: {
                    relative?: boolean,
                    highMin?: string,
                    highMax?: string,
                    lowMax?: string,
                    lowMin?: string,
                },
                childs: {
                    properties: [
                        IProperties
                    ]
                }
            },
            spawnHeight?: {
                props: {
                    relative?: boolean,
                    highMin?: string,
                    highMax?: string,
                    lowMax?: string,
                    lowMin?: string,
                },
                childs: {
                    properties: [
                        IProperties
                    ]
                }
            },
            spawnWidth?: {
                props: {
                    relative?: boolean,
                    ighMin?: string,
                    highMax?: string,
                    lowMax?: string,
                    lowMin?: string,
                },
                childs: {
                    properties: [
                        IProperties
                    ]
                }
            },
            transparency?: {
                props: {
                    relative?: string,
                    highMin?: string,
                    highMax?: string,
                    lowMax?: string,
                    lowMin?: string,
                    active?: string,
                },
                childs: {
                    properties: [
                        IProperties
                    ]
                }
            },
            velocity?: {
                props: {
                    relative?: string,
                    highMin?: string,
                    highMax?: string,
                    lowMax?: string,
                    lowMin?: string,
                    active?: string,
                },
                childs: {
                    properties: [
                        IProperties
                    ]
                }
            },
            wind?: {
                props: {
                    relative?: string,
                    highMin?: string,
                    highMax?: string,
                    lowMax?: string,
                    lowMin?: string,
                    active?: string,
                },
                childs: {
                    properties: [
                        IProperties
                    ]
                }
            },
            tint?:{
                props: {},
                childs:{
                    colors: [
                        {
                            color:{
                                childs: string[]
                            }
                        }
                    ],
                    timelines: [
                        {
                            timeline: {
                                childs: string[]
                            }
                        }
                    ]
                }
            }
        }
    }
}

interface IProperties {
    property: {
        props: {
            time?: string,
            scale?: string,
        }
    }
}