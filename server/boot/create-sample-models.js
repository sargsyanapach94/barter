module.exports = function(app) {

  app.dataSources.mysqlDs.automigrate('ad', function(err) {
    if (err) throw err;

    app.models.ad.create([
            {
              "name": "Dog",
              "message": "adafs ascsd scsd vsdv",
              "category_id": "1",
              "user_id": "827603344024096",
              "date": new Date(2015,1,8),
              "user_name": "Suren Sargsyan",
              "email": "sargsyanapach94@mail.ru",
              "phone": "+374 43303606",
              "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzqKPYKLogr-lhRUy-ToRbGpVumg1OUwsw1a6JnBX3Dji75n1v",
            },
            {
              "name": "Cat",
              "message": "Knvirem katvis. Spitak ev sev gujni. 5 tarekan , lav muka brnum. Pntrum em hogatar mardkanc. adafs ascsd scsd vsdv",
              "category_id": "1",
              "user_id": "827603344024096",
              "date": new Date(2014,9,8),
              "user_name": "Suren Sargsyan",
              "email": "sargsyanapach94@mail.ru",
              "phone": "+374 43303606",
              "image": "",
            },
            {
              "name": "galaxi s4 mini",
              "message": "adafs ascsd scsd vsdv",
              "category_id": "2",
              "user_id": "827603344024096",
              "date": new Date(2015,1,2),
              "user_name": "Suren Sargsyan",
              "email": "sargsyanapach94@mail.ru",
              "phone": "+374 43303606",
              "image": "",
            },
            {
              "name": "iPhone",
              "message": "iphone 4s Asacss ascsd, askcb scsd vsdv",
              "category_id": "2",
              "user_id": "1681648378735000",
              "date": new Date(2015,1,1),
              "user_name": "Lusine Sargsyan",
              "email": "lusinsargsyan96@mail.ru",
              "phone": "+374 55543806",
              "image": "",
            },
            {
              "name": "Phone",
              "message": "galaxi s4 Asacss ascsd, askcb scsd vsdv",
              "category_id": "2",
              "user_id": "1681648378735000",
              "date": new Date(2013,5,5),
              "user_name": "Lusine Sargsyan",
              "email": "lusinsargsyan96@mail.ru",
              "phone": "+374 55543806",
              "image": "",
            },
            {
              "name": "TV",
              "message": "newMes dckcdcj cje cje sages",
              "category_id": "2",
              "user_id": "1681648378735000",
              "date": new Date(2012,6,15),
              "user_name": "Lusine Sargsyan",
              "email": "lusinsargsyan96@mail.ru",
              "phone": "+374 55543806",
              "image": null,
              
            },
            {
              "name": "laptop",
              "message": "ne kjcds sdjck jdskcbsd wMes dckcdcj cje cje sages",
              "category_id": "2",
              "user_id": "1681648378735000",
              "date": new Date(2012,12,15),
              "user_name": "Lusine Sargsyan",
              "email": "lusinsargsyan96@mail.ru",
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
          "email": "sargsyanapach94@mail.ru",
          "img_url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xtf1/v/t1.0-1/p50x50/12036667_829718463812584_4508566236580643383_n.jpg?oh=4393fd2b192442d213638fbc35f6dab4&oe=56A870CF&__gda__=1449677705_86cd9ba37dee17fe0a8f47d500f5be34",
          // "user_id": "1" 
          "user_id": "827603344024096" 
                  },
        {
          "name": "Lusine Sargsyan",
          "birth_date": new Date(1996,05,12),
          "img_url": "",
          "email": "lusinsargsyan96@mail.ru",
          //"user_id": "2"
          "user_id": "1681648378735000"
                  }
      ], function(err, users) {
      if (err) throw err;

      //console.log('Models created: \n', subscribers);
    });
  });

  app.dataSources.mysqlDs.automigrate('contact', function(err) {
    if (err) throw err;

    app.models.contact.create([
        {
          "email": "sargsyanapach94@mail.ru",
          "user_id": "827603344024096" ,
          "location_id": "2" ,
          // "country": "Armenia",
          // "district": "Kotayq",
          "city": "Nor Hachn",
          "phone": "+374 43303606"
                  },
        {
          "email": "lusinsargsyan96@mail.ru",
          "user_id": "1681648378735000",
          "location_id": "8" ,
          // "country": "Armenia",
          // "district": "Lori",
          "city": "Armavir",
          "phone": "+374 055485193"
                  }
      ], function(err, contacts) {
      if (err) throw err;

      //console.log('Models created: \n', contacts);
    });
  });

  app.dataSources.mysqlDs.automigrate('location', function(err) {
    if (err) throw err;

    app.models.location.create([
        //English
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
      ], function(err, location) {
      if (err) throw err;
    });
  });

  app.dataSources.mysqlDs.automigrate('tr_location', function(err) {
    if (err) throw err;

    app.models.tr_location.create([
        //English
        {"district": "Erevan","country": "Armenia", "location_id": 1, "lg_id": 1},
        {"district": "Kotayq","country": "Armenia", "location_id": 2, "lg_id": 1},
        {"district": "Gexarquniq","country": "Armenia", "location_id": 3, "lg_id": 1},
        {"district": "Shirak","country": "Armenia", "location_id": 4, "lg_id": 1},
        {"district": "Lori","country": "Armenia", "location_id": 5, "lg_id": 1},
        {"district": "Tavush","country": "Armenia", "location_id": 6, "lg_id": 1},
        {"district": "Aragatotn","country": "Armenia", "location_id": 7, "lg_id": 1},
        {"district": "Armavir","country": "Armenia", "location_id": 8, "lg_id": 1},
        {"district": "Ararat","country": "Armenia", "location_id": 9, "lg_id": 1},
        {"district": "Vayoc Dzor","country": "Armenia", "location_id": 10, "lg_id": 1},
        {"district": "Syuniq","country": "Armenia", "location_id": 11, "lg_id": 1},
        // Հայերեն
        {"district": "Երևան","country": "Հայաստան", "location_id": 1, "lg_id":2},
        {"district": "Կոտայք","country": "Հայաստան", "location_id": 2, "lg_id":2},
        {"district": "Գեղարքունիք","country": "Հայաստան", "location_id": 3, "lg_id":2},
        {"district": "Շիրակ","country": "Հայաստան", "location_id": 4, "lg_id":2},
        {"district": "Լոռի","country": "Հայաստան", "location_id": 5, "lg_id":2},
        {"district": "Տավուշ","country": "Հայաստան", "location_id": 6, "lg_id":2},
        {"district": "Արագածոտն","country": "Հայաստան", "location_id": 7, "lg_id":2},
        {"district": "Արմավիր","country": "Հայաստան", "location_id": 8, "lg_id":2},
        {"district": "Արարատ","country": "Հայաստան", "location_id": 9, "lg_id":2},
        {"district": "Վայոց Ձոր","country": "Հայաստան", "location_id": 10, "lg_id":2},
        {"district": "Սյունիք","country": "Հայաստան", "location_id": 11, "lg_id":2},
      ], function(err, tr_location) {
      if (err) throw err;
    });
  });

  app.dataSources.mysqlDs.automigrate('language', function(err) {
    if (err) throw err;

    app.models.language.create([
        {"id":2, "name": "Armenian", "short_name": "arm"},
        {"id":1, "name": "English", "short_name": "eng"},
      ], function(err, languages) {
      if (err) throw err;

      //console.log('Models created: \n', subscribers);
    });
  });

  app.dataSources.mysqlDs.automigrate('category', function(err) {
    if (err) throw err;

    app.models.category.create([
        {"name": "animals", "id": "1"},
        {"name": "electronics", "id": "2"},
        {"name": "books", "id": "3"},
        {"name": "cars", "id": "4"}
      ], function(err, categories) {
      if (err) throw err;
    });
  });

  app.dataSources.mysqlDs.automigrate('tr_category', function(err) {
    if (err) throw err;

    app.models.tr_category.create([
        // English
        {"lg_id": "2", "name": "Կենդանիներ", "category_id": "1"},
        {"lg_id": "2", "name": "Էլեկտրոնիկա", "category_id": "2"},
        {"lg_id": "2", "name": "Գրքեր", "category_id": "3"},
        {"lg_id": "2", "name": "Մեքենաներ", "category_id": "4"},

        // Հայերեն
        {"lg_id": "1", "name": "Animals", "category_id": "1"},
        {"lg_id": "1", "name": "Electronics", "category_id": "2"},
        {"lg_id": "1", "name": "Books", "category_id": "3"},
        {"lg_id": "1", "name": "Cars", "category_id": "4"}

      ], function(err, tr_categories) {
      if (err) throw err;
    });
  });
};