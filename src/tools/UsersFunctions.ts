export const normalizeData = (randomUsers: any[]) => randomUsers.map((user: any) => {
    const danceStyles = ['Hip-Hop', 'Break-Dance', 'Twerk'];
    console.log('dance: ', danceStyles[Math.random() * danceStyles.length]);
    return {
        gender: user.gender,
        title: user.name.title,
        full_name: `${user.name.first} ${user.name.last}`,
        city: user.location.city,
        state: user.location.state,
        country: user.location.country,
        postcode: user.location.postcode,
        coordinates: user.location.coordinates,
        timezone: user.location.timezone,
        email: user.email,
        b_date: user.dob.date,
        age: user.dob.age,
        phone: user.phone,
        picture_large: user.picture.large,
        picture_thumbnail: user.picture.thumbnail,
        dance: danceStyles[Math.floor(Math.random() * danceStyles.length)],
    };
});
