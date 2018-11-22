export default function (core, opens) {
    var monsters = core.maps[core.mapIndex].monsters;
    var gates = core.maps[core.mapIndex].gates;
    for( var i=0; i<monsters.length; i++ ) {
        if( monsters[i][2] && monsters[i][2].toString() === opens.toString() ) {
            return;
        }
    }
    var linshi = [];
    for( var i=0; i<gates.length; i++ ) {
        if( opens.indexOf(gates[i][1]) === -1 ) {
            linshi.push(gates[i]);
        }
    }
    core.maps[core.mapIndex].gates = linshi;
    core.render(core.maps[core.mapIndex], core.hero);
}