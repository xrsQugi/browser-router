const cars = [
    { 
        id: '718', 
        name: '718', 
        photo: 'https://files.porsche.com/filestore/image/multimedia/none/982-718spyder-modelimage-sideshot/model/d9552a39-8616-11e9-80c4-005056bbdc38/porsche-model.png',
        text: 'Porsche 718 — це розкішний спортивний автомобіль, який завоював популярність завдяки своїй потужній потужності та елегантному дизайну. Він доступний у різних моделях, включаючи Cayman і Boxster. 718 оснащений низкою передових функцій і технологій, які покращують враження від водіння.'
    },
    { 
        id: '911', 
        name: '911', 
        photo: 'https://porsche.dealer.php7.postbox.kiev.ua/images/doc/b/e/be5de59-porsche-model.png?&s=6',
        text: 'Porsche 911 — це легендарний спортивний автомобіль, який випускається понад 50 років. Він відомий своїм культовим дизайном, потужною продуктивністю та точною інженерією. 911 став символом розкоші та високопродуктивного водіння.' 
    },
    { 
        id: 'taycan', 
        name: 'Taycan', 
        photo: 'https://files.porsche.com/filestore/image/multimedia/none/j1-taycan-tu-s-modelimage-sideshot/model/60c967a4-ac79-11e9-80c4-005056bbdc38/porsche-model.png',
        text: 'Porsche Taycan — повністю електричний спортивний автомобіль, вироблений німецьким автовиробником Porsche. Вперше він був представлений як концепт-кар у 2015 році, а пізніше дебютував як серійна модель у 2019 році. Taycan відомий своєю вражаючою продуктивністю та передовими технологіями.'
    },
    { 
        id: 'panamera', 
        name: 'Panamera', 
        photo: 'https://files.porsche.com/filestore/image/multimedia/none/971-g2-2nd-tus-modelimage-sideshot/model/ccfbfa0b-d324-11ea-80cc-005056bbdc38/porsche-model.png', 
        text: 'Porsche Panamera - це розкішний седан, який завоював популярність на автомобільному ринку. Завдяки елегантному дизайну та потужній продуктивності Panamera пропонує поєднання стилю та швидкості. Завдяки ряду двигунів, від V6 до V8 з турбонаддувом, Panamera забезпечує вражаюче прискорення та керованість'
    },
    { 
        id: 'macan', 
        name: 'Macan', 
        photo: 'https://files.porsche.com/filestore/image/multimedia/none/pa3-t-modelimage-sideshot/model/7edcc317-7868-11ec-80e7-005056bbdc38/porsche-model.png', 
        text: 'Porsche Macan — це розкішний компактний позашляховик, відомий своєю вражаючою продуктивністю та елегантним дизайном. Він пропонує поєднання спортивності та практичності, що робить його популярним вибором для тих, хто бажає високого рівня досвіду водіння.'
    },
    { 
        id: 'Cayenne', 
        name: 'Cayenne', 
        photo: 'https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-s-modelimage-sideshot/model/06955e42-e03e-11ed-8101-005056bbdc38/porsche-model.png',
        text: 'Porsche Cayenne – це розкішний позашляховик, який поєднує в собі високу продуктивність з елегантністю та комфортом. Він відомий своїми потужними двигунами, точним керуванням і розкішним салоном. Cayenne пропонує різноманітні варіанти двигунів, у тому числі двигуни V6 і V8, які забезпечують чудове прискорення та максимальну швидкість.' 
    },
];

export const getCars = () => {
    return cars;
};

export const getCarById = (carId) => {
    return cars.find(car => car.id === carId);
};
