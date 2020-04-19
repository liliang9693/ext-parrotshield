
enum MOTORID{
    
    //% block="M1"
    MOTOR_1,
    //% block="M2"
    MOTOR_2
    
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

        Generator.addImport('import parrot');

        Generator.addCode(`parrot.set_speed(parrot.${id}, ${dir}${speed})`);


    }

    //% block="parrotshield all stop " blockType="command"
    export function stop(parameter: any, block: any) {

        Generator.addImport('import parrot');

        Generator.addCode(`parrot.set_speed(parrot.MOTOR_1, 0)`);
        Generator.addCode(`parrot.set_speed(parrot.MOTOR_2, 0)`);


    }


}
