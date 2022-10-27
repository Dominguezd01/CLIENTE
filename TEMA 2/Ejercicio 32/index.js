//EJ 32

const getSecondsToday = () => {
    hoy = new Date();

    mañana = new Date(hoy.getTime() + 8640000)
    mañana.setHours(0,0,0)
    return mañana.getTime() - hoy.getTime()/1000
}

console.log(getSecondsToday())