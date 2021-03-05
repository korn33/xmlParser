import {ActionType} from "./ActionType.js";

const checkValue = (propName: string, value: string): string => {
    if (value === undefined) {
        return '';
    } else {
        return `${propName}="${value}"`;
    }
};

const getArrayProperties = (elemArrObj: any): string => {
    let result: string = '';
    if ( (elemArrObj.scalingCount !== '0') && (elemArrObj.scalingCount !== undefined) ) {
        result += `<c:properties> \n`;
        for (let i: number = 0; i<=elemArrObj.scalingCount - 1; i++) {
            const propertyScalingName: string = 'scaling' + i;
            const propertyTimeName: string = 'timeline' + i;
            result += `<c:property time="${elemArrObj[propertyTimeName]}" scale="${elemArrObj[propertyScalingName]}"/> \n`;
        }
        result += `</c:properties> \n`;
    }
    return result;
};

const getTint = (elemArrObj: any): string => {
    let result: string = '';
    if ( ( (elemArrObj.colorsCount !== '0' ) || (elemArrObj.colorsCount !== undefined) ) && ( (elemArrObj.timelineCount !== '0' ) || (elemArrObj.timelineCount !== undefined) ) ) {
        result += `\n <c:tint> \n`;
        const colors: string = getColorsTint(elemArrObj);
        result += colors;
        const timelines: string = getTimelinesTint(elemArrObj);
        result += timelines;
        result += `\n </c:tint> \n`;
    }
    return result;
};

const getColorsTint = (elemArrObj: any): string => {
    let result: string = '';
    if ( (elemArrObj.colorsCount !== '0') && (elemArrObj.colorsCount !== undefined) ) {
        result += `\n <c:colors> \n`;
        for (let i: number = 0; i<=elemArrObj.colorsCount - 1; i++) {
            const propertyColors: string = 'colors' + i;
            result += `<c:color>${elemArrObj[propertyColors]}</c:color> \n`;
        }
        result += `\n </c:colors> \n`;
    }
    return result;
}

const getTimelinesTint = (elemArrObj: any): string => {
    let result: string = '';
    if ( (elemArrObj.timelineCount !== '0') && (elemArrObj.timelineCount !== undefined) ) {
        result += `\n <c:timelines> \n`;
        for (let i: number = 0; i<=elemArrObj.timelineCount - 1; i++) {
            const propertyColors: string = 'timeline' + i;
            result += `<c:timeline>${elemArrObj[propertyColors]}</c:timeline> \n`;
        }
        result += `\n </c:timelines> \n`;
    }
    return result;
};

export const combineResult = (arrObj: any[]): string => {
    //------------------------------------------------------ParticleView-----------------------------------------------------------------------
    let result: string = `<c:ParticleView \n `;
    const indexCount = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Count
    });
    result += `${checkValue('maxParticleCount', arrObj[indexCount].max)} \n ${checkValue('minParticleCount', arrObj[indexCount].min)} \n `;
    const indexDelay = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Delay
    });
    result += `${checkValue('minDelay', arrObj[indexDelay].lowMin)} \n ${checkValue('maxDelay', arrObj[indexDelay].lowMax)} \n `;
    const indexDuration = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Duration
    });
    result += `${checkValue('maxDuration', arrObj[indexDuration].lowMax)} \n ${checkValue('minDuration', arrObj[indexDuration].lowMin)} `;
    // result += `
    //     state=""
    //     flipY=""
    //     scaleY=""
    //     scaleX=""
    //     depth=""
    //     additive=""
    //     aligned=""
    //     attached=""
    //     continuous=""
    //     enabledPositioning=""
    //     minOffsetX=""
    //     minOffsetY=""
    //     offsetX=""
    //     offsetY=""
    //     premultipliedAlpha=""
    //     rotation="" \n >
    result += '> \n';

    //------------------------------------------------------LifeOffset-----------------------------------------------------------------------
    const indexLifeOffset = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.LifeOffset
    });
    result += `<c:lifeOffset `;
    result += ` ${checkValue('active', arrObj[indexLifeOffset].active)} ` +
        `${checkValue('relative', arrObj[indexLifeOffset].relative)} `+
        `${checkValue('highMin', arrObj[indexLifeOffset].highMin)} `+
        `${checkValue('highMax', arrObj[indexLifeOffset].highMax)} `+
        `${checkValue('lowMax', arrObj[indexLifeOffset].lowMax)} `+
        `${checkValue('lowMin', arrObj[indexLifeOffset].lowMin)} />`;

    //------------------------------------------------------Life-----------------------------------------------------------------------
    const indexLife = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Life
    });
    result += '\n <c:life ';
    result += ` ${checkValue('lowMin', arrObj[indexLife].lowMin)} ` +
            `${checkValue('lowMax', arrObj[indexLife].lowMax)} ` +
            `${checkValue('highMax', arrObj[indexLife].highMax)} ` +
            `${checkValue('highMin', arrObj[indexLife].highMin)} ` +
            `${checkValue('relative', arrObj[indexLife].relative)}> `;
    result += getArrayProperties(arrObj[indexLife]);
    result += '\n </c:life> \n';

    //------------------------------------------------------Emission-----------------------------------------------------------------------
    const indexEmission = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Emission
    });
    result += `\n <c:emission \n`;
    result += ` ${checkValue('relative', arrObj[indexEmission].relative)} ` +
            `${checkValue('highMin', arrObj[indexEmission].highMin)} `+
            `${checkValue('highMax', arrObj[indexEmission].highMax)} `+
            `${checkValue('lowMax', arrObj[indexEmission].lowMax)} ` +
            `${checkValue('lowMin', arrObj[indexEmission].lowMin)}> `;
    result += getArrayProperties(arrObj[indexEmission]);
    result += '\n </c:emission>';

    //------------------------------------------------------Angle-----------------------------------------------------------------------
    const indexAngle = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Angle
    });
    result += `\n <c:angle \n`;
    result += ` ${checkValue('lowMin', arrObj[indexAngle].lowMin)} ` +
        `${checkValue('lowMax', arrObj[indexAngle].lowMax)} ` +
        `${checkValue('highMax', arrObj[indexAngle].highMax)} `+
        `${checkValue('highMin', arrObj[indexAngle].highMin)} ` +
        `${checkValue('relative', arrObj[indexAngle].relative)} `+
        `${checkValue('active', arrObj[indexAngle].active)}> `;
    result += getArrayProperties(arrObj[indexAngle]);
    result += `\n </c:angle> \n`;


    //------------------------------------------------------Gravity-----------------------------------------------------------------------
    const indexGravity = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Gravity
    });
    result += `\n <c:gravity \n`;
    result += ` ${checkValue('active', arrObj[indexGravity].active)} ` +
        `${checkValue('relative', arrObj[indexGravity].relative)} `+
        `${checkValue('highMin', arrObj[indexGravity].highMin)} ` +
        `${checkValue('highMax', arrObj[indexGravity].highMax)} `+
        `${checkValue('lowMax', arrObj[indexGravity].lowMax)} `+
        `${checkValue('lowMin', arrObj[indexGravity].lowMin)}> `;
    result += getArrayProperties(arrObj[indexGravity]);
    result += `
    </c:gravity>
    `;


    //------------------------------------------------------rotation-----------------------------------------------------------------------
    const indexRotation = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Rotation
    });
    result += `\n <c:rotation \n`;
    result += `
        ${checkValue('active', arrObj[indexRotation].active)}
        ${checkValue('relative', arrObj[indexRotation].relative)}
        ${checkValue('highMin', arrObj[indexRotation].highMin)}
        ${checkValue('highMax', arrObj[indexRotation].highMax)}
        ${checkValue('lowMax', arrObj[indexRotation].lowMax)}
        ${checkValue('lowMin', arrObj[indexRotation].lowMin)}>
    `;
    result += getArrayProperties(arrObj[indexRotation]);
    result += `
    </c:rotation>`;

    //------------------------------------------------------scaleY-----------------------------------------------------------------------
    const indexYScale = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.YScale
    });
    result += `\n <c:scaleY \n`;
    result += `
            ${checkValue('relative', arrObj[indexYScale].relative)}
            ${checkValue('highMin', arrObj[indexYScale].highMin)}
            ${checkValue('highMax', arrObj[indexYScale].highMax)}
            ${checkValue('lowMax', arrObj[indexYScale].lowMax)}
            ${checkValue('lowMin', arrObj[indexYScale].lowMin)}
            ${checkValue('active', arrObj[indexYScale].active)}>
    `;
    result += getArrayProperties(arrObj[indexYScale]);
    result += `
        </c:scaleY>
    `;

    //------------------------------------------------------scaleX-----------------------------------------------------------------------
    const indexXScale = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.XScale
    });
    result += `\n <c:scaleX \n`;
    result += `
            ${checkValue('relative', arrObj[indexXScale].relative)}
            ${checkValue('highMin', arrObj[indexXScale].highMin)}
            ${checkValue('highMax', arrObj[indexXScale].highMax)}
            ${checkValue('lowMax', arrObj[indexXScale].lowMax)}
            ${checkValue('lowMin', arrObj[indexXScale].lowMin)} >
    `;
    result += getArrayProperties(arrObj[indexXScale]);
    result += `
        </c:scaleX>
    `;

    //------------------------------------------------------spawnHeight-----------------------------------------------------------------------
    const indexSpawnHeight = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.SpawnHeight
    });
    result += `\n <c:spawnHeight \n`;
    result += `
            ${checkValue('relative', arrObj[indexSpawnHeight].relative)}
            ${checkValue('highMin', arrObj[indexSpawnHeight].highMin)}
            ${checkValue('highMax', arrObj[indexSpawnHeight].highMax)}
            ${checkValue('lowMax', arrObj[indexSpawnHeight].lowMax)}
            ${checkValue('lowMin', arrObj[indexSpawnHeight].lowMin)}>
    `;
    result += getArrayProperties(arrObj[indexSpawnHeight]);
    result += `
        </c:spawnHeight>
    `;

    //------------------------------------------------------spawnWidth-----------------------------------------------------------------------
    const indexSpawnWidth = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.SpawnWidth
    });
    result += `\n <c:spawnWidth \n`;
    result += `
        ${checkValue('relative', arrObj[indexSpawnWidth].relative)}
        ${checkValue('highMin', arrObj[indexSpawnWidth].highMin)}
        ${checkValue('highMax', arrObj[indexSpawnWidth].highMax)}
        ${checkValue('lowMax', arrObj[indexSpawnWidth].lowMax)}
        ${checkValue('lowMin', arrObj[indexSpawnWidth].lowMin)}>
    `;
    result += getArrayProperties(arrObj[indexSpawnWidth]);
    result += `
    </c:spawnWidth>
    `;

    //------------------------------------------------------transparency-----------------------------------------------------------------------
    const indexTransparency = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Transparency
    });
    result += `\n <c:transparency \n`;
    result += `
        ${checkValue('relative', arrObj[indexTransparency].relative)}
        ${checkValue('highMin', arrObj[indexTransparency].highMin)}
        ${checkValue('highMax', arrObj[indexTransparency].highMax)}
        ${checkValue('lowMax', arrObj[indexTransparency].lowMax)}
        ${checkValue('lowMin', arrObj[indexTransparency].lowMin)}
        active="false">
    `;
    result += getArrayProperties(arrObj[indexTransparency]);
    result += `
    </c:transparency>
    `;

    //------------------------------------------------------velocity-----------------------------------------------------------------------
    const indexVelocity = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Velocity
    });
    result += `\n <c:velocity \n`;
    result += `
        ${checkValue('relative', arrObj[indexVelocity].relative)}
        ${checkValue('highMin', arrObj[indexVelocity].highMin)}
        ${checkValue('highMax', arrObj[indexVelocity].highMax)}
        ${checkValue('lowMax', arrObj[indexVelocity].lowMax)}
        ${checkValue('lowMin', arrObj[indexVelocity].lowMin)}
        ${checkValue('active', arrObj[indexVelocity].active)}>
    `;
    result += getArrayProperties(arrObj[indexVelocity]);
    result += `
    </c:velocity>
    `;

    //------------------------------------------------------wind-----------------------------------------------------------------------
    const indexWind = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Wind
    });
    result += `\n <c:wind \n`;
    result += `
        ${checkValue('relative', arrObj[indexWind].relative)}
        ${checkValue('highMin', arrObj[indexWind].highMin)}
        ${checkValue('highMax', arrObj[indexWind].highMax)}
        ${checkValue('lowMax', arrObj[indexWind].lowMax)}
        ${checkValue('lowMin', arrObj[indexWind].lowMin)}
        ${checkValue('active', arrObj[indexWind].active)}>
    `;
    result += getArrayProperties(arrObj[indexWind]);
    result += `
    </c:wind>
    `;

    //------------------------------------------------------tint-----------------------------------------------------------------------
    const indexTint = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Tint
    });
    result += getTint(arrObj[indexTint]);
    result += `\n </c:ParticleView>`;
    return result;
}