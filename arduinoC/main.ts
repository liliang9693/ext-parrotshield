
enum MOTORID{
    
    //% block="M1"
    1,
    //% block="M2"
    2
    
}


//% color="#0091ed" iconWidth=50 iconHeight=40
namespace parrotshield {
    //% block="parrotshield set motor [MOTORID] to [DIR] at [SPEED]% speed" blockType="command"
    //% MOTORID.shadow="dropdown" MOTORID.options="MOTORID"  MOTORID.defl="MOTORID.1"
    //% DIR.shadow="dropdown" DIR.options="DIR" 
    //% SPEED.shadow="range" SPEED.params.min="0" SPEED.params.max="100" SPEED.defl="100"
    export function set(parameter: any, block: any) {
        let id=parameter.MOTORID.code;
        let dir=parameter.DIR.code;
        let speed=parameter.SPEED.code;

        if(dir==2) {dir='-';}
        else {dir='';}

        Generator.addInclude('includeWire', '#include <Wire.h>');

        Generator.addCode(`Wire.begin();\n\tWire.beginTransmission(0x10);\n\tWire.write(${id});\n\tWire.write((int)(${dir}${speed}));\n\tWire.endTransmission();`);


    }

    //% block="parrotshield all stop " blockType="command"
    export function stop(parameter: any, block: any) {

        Generator.addInclude('includeWire', '#include <Wire.h>');

        Generator.addCode(`Wire.begin();\n\tWire.beginTransmission(0x10);\n\tWire.write(1);\n\tWire.write(0);\n\tWire.endTransmission();\n\tWire.beginTransmission(0x10);\n\tWire.write(2);\n\tWire.write(0);\n\tWire.endTransmission();`);


    }


}
