
export const dateCleaner = (data) => {
    // console.log('ahppy')
    // console.log(data.current_observation);
    let currentDate = data.current_observation.observation_time.split(' ').slice(3, 5);
    const almost = currentDate.join();
    const space = ' ';
    currentDate = almost.split(',').join(space).trim();
    console.log(currentDate)
    return currentDate;
};


