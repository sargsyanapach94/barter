module.exports = function(app) {

  app.dataSources.mysqlDs.automigrate('ad', function(err) {
    if (err) throw err;

    app.models.ad.create([
            {
              "name": "Dog",
              "message": "adafs ascsd scsd vsdv",
              "category_kay": 1,
              "user_id": "827603344024096",
              "date": new Date(),
              "contacts_kay": "sargsyanapach94@mail.ru",
              "phone": "+374 43303606",
              "image": "",
              //"id": 0
            },
            {
              "name": "Cat",
              "message": "Knvirem katvis. Spitak ev sev gujni. 5 tarekan , lav muka brnum. Pntrum em hogatar mardkanc. adafs ascsd scsd vsdv",
              "category_kay": 1,
              "user_id": "827603344024096",
              "date": new Date(),
              "contacts_kay": "sargsyanapach94@mail.ru",
              "phone": "+374 43303606",
              "image": "",
              //"id": 0
            },
            {
              "name": "galaxi s4 mini",
              "message": "adafs ascsd scsd vsdv",
              "category_kay": 2,
              "user_id": "827603344024096",
              "date": new Date(),
              "contacts_kay": "sargsyanapach94@mail.ru",
              "phone": "+374 43303606",
              "image": "",
              //"id": 0
            },
            {
              "name": "iPhone",
              "message": "iphone 4s Asacss ascsd, askcb scsd vsdv",
              "category_kay": 2,
              "user_id": "1681648378735735",
              "date": new Date(),
              "contacts_kay": "astxsargsyan96@mail.ru",
              "phone": "+374 55543806",
              "image": "",
              //"id": 0 
            },
            {
              "name": "Phone",
              "message": "galaxi s4 Asacss ascsd, askcb scsd vsdv",
              "category_kay": 2,
              "user_id": "1681648378735735",
              "date": new Date(),
              "contacts_kay": "astxsargsyan96@mail.ru",
              "phone": "+374 55543806",
              "image": "",
              //"id": 0
            },
            {
              "name": "TV",
              "message": "newMes dckcdcj cje cje sages",
              "category_kay": 2,
              "date": "2015-09-08T18:34:45.000Z",
              "contacts_kay": "astxsargsyan96@mail.ru",
              "user_id": "1681648378735735",
              "phone": "+374 55543806",
              "image": null,
              
            },
            {
              "name": "laptop",
              "message": "ne kjcds sdjck jdskcbsd wMes dckcdcj cje cje sages",
              "category_kay": 2,
              "date": "2015-09-08T18:34:45.000Z",
              "contacts_kay": "astxsargsyan96@mail.ru",
              "user_id": "1681648378735735",
              "phone": "+374 55543806",
              //"image": null,
              
            }
    ], function(err, ads) {
      if (err) throw err;

      //console.log('Models created: \n', items);
    });
  });

  app.dataSources.mysqlDs.automigrate('user', function(err) {
    if (err) throw err;

    app.models.user.create([
        {
          "name": "Suren Sargsyan",
          "birth_date": new Date(1994,01,27),
          "contacts_kay": "sargsyanapach94@mail.ru",
          "img_url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xtf1/v/t1.0-1/p50x50/12036667_829718463812584_4508566236580643383_n.jpg?oh=4393fd2b192442d213638fbc35f6dab4&oe=56A870CF&__gda__=1449677705_86cd9ba37dee17fe0a8f47d500f5be34",
          "user_id": "827603344024096" 
                  },
        {
          "name": "Astxik Sargsyan",
          "birth_date": new Date(1996,05,12),
          "img_url": "",
          "contacts_kay": "astxsargsyan96@mail.ru",
          "user_id": "1681648378735735"
                  }
      ], function(err, users) {
      if (err) throw err;

      //console.log('Models created: \n', subscribers);
    });
  });

  app.dataSources.mysqlDs.automigrate('contacts', function(err) {
    if (err) throw err;

    app.models.contacts.create([
        {
          "email": "sargsyanapach94@mail.ru",
          "region_kay": 2,
          "city": "Nor Hachn",
          "phone": "+374 43303606",
                  },
        {
          "email": "astxsargsyan96@mail.ru",
          "region_kay": 3,
          "city": "Gavar",
          "phone": "+374 055485193",
                  }
      ], function(err, contacts) {
      if (err) throw err;

      //console.log('Models created: \n', contacts);
    });
  });

  app.dataSources.mysqlDs.automigrate('language', function(err) {
    if (err) throw err;

    app.models.language.create([
        {"name": "Armenian"},
        {"name": "English"},
      ], function(err, languages) {
      if (err) throw err;

      //console.log('Models created: \n', subscribers);
    });
  });

  app.dataSources.mysqlDs.automigrate('region', function(err) {
    if (err) throw err;

    app.models.region.create([
        {"district": "Erevan","country": "Armenia", "id": 1},
        {"district": "Kotayq","country": "Armenia", "id": 2},
        {"district": "Gexarquniq","country": "Armenia", "id": 3},
        {"district": "Shirak","country": "Armenia", "id": 4},
        {"district": "Lori","country": "Armenia", "id": 5},
        {"district": "Tavush","country": "Armenia", "id": 6},
        {"district": "Aragatotn","country": "Armenia", "id": 7},
        {"district": "Armavir","country": "Armenia", "id": 8},
        {"district": "Ararat","country": "Armenia", "id": 9},
        {"district": "Vayoc Dzor","country": "Armenia", "id": 10},
        {"district": "Syuniq","country": "Armenia", "id": 11},
      ], function(err, countrys) {
      if (err) throw err;

      //console.log('Models created: \n', subscribers);
    });
  });

  app.dataSources.mysqlDs.automigrate('phone', function(err) {
    if (err) throw err;

    app.models.phone.create([
        {
          "number": "+374 43303606",
          "log_in":"suren"
        },
        {
          "number": "+374 55543806",
          "log_in":"astx"
        }
      ], function(err, phones) {
      if (err) throw err;

      //console.log('Models created: \n', subscribers);
    });
  });

  app.dataSources.mysqlDs.automigrate('category', function(err) {
    if (err) throw err;

    app.models.category.create([
        {"name": "Animals", "id":1},
        {"name": "Electronics", "id":2}
      ], function(err, categories) {
      if (err) throw err;

      //console.log('Models created: \n', subscribers);
    });
  });
};