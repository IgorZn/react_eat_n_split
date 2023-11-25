import { faker } from '@faker-js/faker';

export const fakeFriends = (num = 5) => {
    const friends = []
    for (let i = 0; i < num; i++) {
        friends.push(
            {
                id: +faker.string.numeric({length: {min: 10, max: 10}}),
                name: faker.person.firstName(),
                image: `https://i.pravatar.cc/48?u=a042581f4e2902670${i}d`,
                balance: +faker.string.numeric(2)
            }
        )
    }

    return friends
}
