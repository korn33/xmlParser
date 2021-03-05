import { ActionType } from "./ActionType.js";
const checkValue = (value) => {
    if (value === undefined) {
        return '';
    }
    else {
        return value;
    }
};
const getArrayProperties = (elemArrObj) => {
    let result = '';
    for (let i = 0; i <= elemArrObj.scalingCount - 1; i++) {
        const propertyScalingName = 'scaling' + i;
        const propertyTimeName = 'timeline' + i;
        result += `<c:property time="${checkValue(elemArrObj[propertyScalingName])}" scale="${checkValue(elemArrObj[propertyTimeName])}"/> \n`;
    }
    return result;
};
export const combineResult = (arrObj) => {
    let result = `<c:ParticleView \n `;
    const indexCount = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Count;
    });
    result += `maxParticleCount="${checkValue(arrObj[indexCount].max)}" \n minParticleCount="${checkValue(arrObj[indexCount].min)}" \n `;
    const indexDelay = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Delay;
    });
    result += `minDelay="${checkValue(arrObj[indexDelay].lowMin)}" \n maxDelay="${checkValue(arrObj[indexDelay].lowMax)}" \n `;
    const indexDuration = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Duration;
    });
    result += `maxDuration="${checkValue(arrObj[indexDuration].lowMax)}" \n minDuration="${checkValue(arrObj[indexDuration].lowMin)}" `;
    result += `
        state=""
        flipY=""
        scaleY=""
        scaleX=""
        depth=""
        additive=""
        aligned=""
        attached=""
        continuous=""
        enabledPositioning=""
        minOffsetX=""
        minOffsetY=""
        offsetX=""
        offsetY=""
        premultipliedAlpha=""
        rotation="" \n > 
        <c:images>
            <c:image src="@dsd/dfs"/>
        </c:images>
        <c:lifeOffset `;
    const indexLifeOffset = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.LifeOffset;
    });
    result += `
                    active="${checkValue(arrObj[indexLifeOffset].active)}" 
                    relative="${checkValue(arrObj[indexLifeOffset].relative)}"
                    highMin="${checkValue(arrObj[indexLifeOffset].highMin)}"
                    highMax="${checkValue(arrObj[indexLifeOffset].highMax)}"
                    lowMax="${checkValue(arrObj[indexLifeOffset].lowMax)}"
                    lowMin="${checkValue(arrObj[indexLifeOffset].lowMin)}"
               />`;
    const indexLife = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Life;
    });
    result += `
        <c:life 
            lowMin="${checkValue(arrObj[indexLife].lowMin)}" 
            lowMax="${checkValue(arrObj[indexLife].lowMax)}" 
            highMax="${checkValue(arrObj[indexLife].highMax)}" 
            highMin="${checkValue(arrObj[indexLife].highMin)}" 
            relative="${checkValue(arrObj[indexLife].relative)}">
                <c:properties>
        `;
    result += getArrayProperties(arrObj[indexLife]);
    result += `                </c:properties>
        </c:life>
`;
    const indexEmission = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Emission;
    });
    result += `
        <c:emission relative="${checkValue(arrObj[indexEmission].relative)}" 
            highMin="${checkValue(arrObj[indexEmission].highMin)}" 
            highMax="${checkValue(arrObj[indexEmission].highMax)}" 
            lowMax="${checkValue(arrObj[indexEmission].lowMax)}" 
            lowMin="${checkValue(arrObj[indexEmission].lowMin)}">
        <c:properties>
    `;
    result += getArrayProperties(arrObj[indexEmission]);
    result += ` 
        </c:properties>
    </c:emission>`;
    const indexAngle = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Angle;
    });
    result += `
<c:angle lowMin="${checkValue(arrObj[indexAngle].lowMin)}"
        lowMax="${checkValue(arrObj[indexAngle].lowMax)}" 
        highMax="${checkValue(arrObj[indexAngle].highMax)}" 
        highMin="${checkValue(arrObj[indexAngle].highMin)}" 
        relative="${checkValue(arrObj[indexAngle].relative)}"
        active="${checkValue(arrObj[indexAngle].active)}">
        <c:properties>
`;
    result += getArrayProperties(arrObj[indexAngle]);
    result += `
</c:properties>
    </c:angle>
`;
    const indexGravity = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Gravity;
    });
    result += `
    <c:gravity 
        active="${checkValue(arrObj[indexGravity].active)}" 
        relative="${checkValue(arrObj[indexGravity].relative)}" 
        highMin="${checkValue(arrObj[indexGravity].highMin)}" 
        highMax="${checkValue(arrObj[indexGravity].highMax)}" 
        lowMax="${checkValue(arrObj[indexGravity].lowMax)}" 
        lowMin="${checkValue(arrObj[indexGravity].lowMin)}">
        <c:properties>
    `;
    result += getArrayProperties(arrObj[indexGravity]);
    result += `
            </c:properties>
    </c:gravity>
    `;
    const indexRotation = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Rotation;
    });
    result += `
    <c:rotation 
        active="${checkValue(arrObj[indexRotation].active)}" 
        relative="${checkValue(arrObj[indexRotation].relative)}" 
        highMin="${checkValue(arrObj[indexRotation].highMin)}" 
        highMax="${checkValue(arrObj[indexRotation].highMax)}" 
        lowMax="${checkValue(arrObj[indexRotation].lowMax)}" 
        lowMin="${checkValue(arrObj[indexRotation].lowMin)}">
        <c:properties>
    `;
    result += getArrayProperties(arrObj[indexRotation]);
    result += `</c:properties>
    </c:rotation>`;
    const indexYScale = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.YScale;
    });
    result += `
        <c:scaleY 
            relative="${checkValue(arrObj[indexYScale].relative)}" 
            highMin="${checkValue(arrObj[indexYScale].highMin)}" 
            highMax="${checkValue(arrObj[indexYScale].highMax)}" 
            lowMax="${checkValue(arrObj[indexYScale].lowMax)}" 
            lowMin="${checkValue(arrObj[indexYScale].lowMin)}" 
            active="${checkValue(arrObj[indexYScale].active)}">
            <c:properties>
    `;
    result += getArrayProperties(arrObj[indexYScale]);
    result += `
            </c:properties>
        </c:scaleY>
    `;
    const indexXScale = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.XScale;
    });
    result += `
        <c:scaleX 
            relative="${checkValue(arrObj[indexXScale].relative)}" 
            highMin="${checkValue(arrObj[indexXScale].highMin)}" 
            highMax="${checkValue(arrObj[indexXScale].highMax)}" 
            lowMax="${checkValue(arrObj[indexXScale].lowMax)}" 
            lowMin="${checkValue(arrObj[indexXScale].lowMin)}" 
            <c:properties>
    `;
    result += getArrayProperties(arrObj[indexXScale]);
    result += `
            </c:properties>
        </c:scaleX>
    `;
    const indexSpawnHeight = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.SpawnHeight;
    });
    result += `
        <c:spawnHeight 
            relative="${checkValue(arrObj[indexSpawnHeight].relative)}" 
            highMin="${checkValue(arrObj[indexSpawnHeight].highMin)}" 
            highMax="${checkValue(arrObj[indexSpawnHeight].highMax)}" 
            lowMax="${checkValue(arrObj[indexSpawnHeight].lowMax)}" 
            lowMin="${checkValue(arrObj[indexSpawnHeight].lowMin)}"
            <c:properties>
    `;
    result += getArrayProperties(arrObj[indexSpawnHeight]);
    result += `
            </c:properties>
        </c:spawnHeight>
    `;
    const indexSpawnWidth = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.SpawnWidth;
    });
    result += `
    <c:spawnWidth 
        relative="${checkValue(arrObj[indexSpawnWidth].relative)}" 
        highMin="${checkValue(arrObj[indexSpawnWidth].highMin)}" 
        highMax="${checkValue(arrObj[indexSpawnWidth].highMax)}" 
        lowMax="${checkValue(arrObj[indexSpawnWidth].lowMax)}" 
        lowMin="${checkValue(arrObj[indexSpawnWidth].lowMin)}">
        <c:properties>
    `;
    result += getArrayProperties(arrObj[indexSpawnWidth]);
    result += `
        </c:properties>
    </c:spawnWidth>
    `;
    const indexTransparency = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Transparency;
    });
    result += `
    <c:transparency 
        relative="${checkValue(arrObj[indexTransparency].relative)}" 
        highMin="${checkValue(arrObj[indexTransparency].highMin)}" 
        highMax="${checkValue(arrObj[indexTransparency].highMax)}" 
        lowMax="${checkValue(arrObj[indexTransparency].lowMax)}" 
        lowMin="${checkValue(arrObj[indexTransparency].lowMin)}" 
        active="${checkValue(arrObj[indexTransparency].active)}">
        <c:properties>
    `;
    result += getArrayProperties(arrObj[indexTransparency]);
    result += `
        </c:properties>
    </c:transparency>
    `;
    const indexVelocity = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Velocity;
    });
    result += `
    <c:velocity 
        relative="${checkValue(arrObj[indexVelocity].relative)}" 
        highMin="${checkValue(arrObj[indexVelocity].highMin)}" 
        highMax="${checkValue(arrObj[indexVelocity].highMax)}" 
        lowMax="${checkValue(arrObj[indexVelocity].lowMax)}" 
        lowMin="${checkValue(arrObj[indexVelocity].lowMin)}" 
        active="${checkValue(arrObj[indexVelocity].active)}">
        <c:properties>
    `;
    result += getArrayProperties(arrObj[indexVelocity]);
    result += `
        </c:properties>
    </c:velocity>
    `;
    const indexWind = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Wind;
    });
    result += `
     <c:wind 
        relative="${checkValue(arrObj[indexWind].relative)}" 
        highMin="${checkValue(arrObj[indexWind].highMin)}" 
        highMax="${checkValue(arrObj[indexWind].highMax)}" 
        lowMax="${checkValue(arrObj[indexWind].lowMax)}" 
        lowMin="${checkValue(arrObj[indexWind].lowMin)}" 
        active="${checkValue(arrObj[indexWind].active)}">
        <c:properties>
    `;
    result += getArrayProperties(arrObj[indexWind]);
    result += `
        </c:properties>
    </c:wind>
    `;
    const indexTint = ActionType.listActionTypes.findIndex(type => {
        return type === ActionType.Tint;
    });
    result += `
    <c:tint>
        <c:colors>
    `;
    for (let i = 0; i <= arrObj[indexTint].colorsCount - 1; i++) {
        const propertyColors = 'colors' + i;
        result += `<c:color>${checkValue(arrObj[indexTint][propertyColors])}</c:color> \n`;
    }
    result += `
        </c:colors>
        <c:timelines>
    `;
    for (let i = 0; i <= arrObj[indexTint].timelineCount - 1; i++) {
        const propertyTimeLine = 'timeline' + i;
        result += `<c:timeline>${checkValue(arrObj[indexTint][propertyTimeLine])}</c:timeline> \n`;
    }
    result += `
        </c:timelines>
    </c:tint>
    `;
    result += `</c:ParticleView>`;
    return result;
};
