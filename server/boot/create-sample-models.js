module.exports = function(app) {

  app.dataSources.mysqlDs.automigrate('ad', function(err) {
    if (err) throw err;

    app.models.ad.create([
            {
              "name": "Dog",
              "message": "adafs ascsd scsd vsdv",
              "category_kay": "animals",
              "user_id": "827603344024096",
              "date": new Date(2015,1,8),
              "user_name": "Suren Sargsyan",
              "contacts_kay": "sargsyanapach94@mail.ru",
              "phone": "+374 43303606",
              "image": "",
            },
            {
              "name": "Cat",
              "message": "Knvirem katvis. Spitak ev sev gujni. 5 tarekan , lav muka brnum. Pntrum em hogatar mardkanc. adafs ascsd scsd vsdv",
              "category_kay": "animals",
              "user_id": "827603344024096",
              "date": new Date(2014,9,8),
              "user_name": "Suren Sargsyan",
              "contacts_kay": "sargsyanapach94@mail.ru",
              "phone": "+374 43303606",
              "image": "",
            },
            {
              "name": "galaxi s4 mini",
              "message": "adafs ascsd scsd vsdv",
              "category_kay": "electronics",
              "user_id": "827603344024096",
              "date": new Date(2015,1,2),
              "user_name": "Suren Sargsyan",
              "contacts_kay": "sargsyanapach94@mail.ru",
              "phone": "+374 43303606",
              "image": "",
            },
            {
              "name": "iPhone",
              "message": "iphone 4s Asacss ascsd, askcb scsd vsdv",
              "category_kay": "electronics",
              "user_id": "1681648378735000",
              "date": new Date(2015,1,1),
              "user_name": "Lusine Sargsyan",
              "contacts_kay": "lusinsargsyan96@mail.ru",
              "phone": "+374 55543806",
              "image": "",
            },
            {
              "name": "Phone",
              "message": "galaxi s4 Asacss ascsd, askcb scsd vsdv",
              "category_kay": "electronics",
              "user_id": "1681648378735000",
              "date": new Date(2013,5,5),
              "user_name": "Lusine Sargsyan",
              "contacts_kay": "lusinsargsyan96@mail.ru",
              "phone": "+374 55543806",
              "image": "",
            },
            {
              "name": "TV",
              "message": "newMes dckcdcj cje cje sages",
              "category_kay": "electronics",
              "date": new Date(2012,6,15),
              "user_name": "Lusine Sargsyan",
              "contacts_kay": "lusinsargsyan96@mail.ru",
              "user_id": "1681648378735000",
              "phone": "+374 55543806",
              "image": null,
              
            },
            {
              "name": "laptop",
              "message": "ne kjcds sdjck jdskcbsd wMes dckcdcj cje cje sages",
              "category_kay": "electronics",
              "date": new Date(2012,12,15),
              "user_name": "Lusine Sargsyan",
              "contacts_kay": "lusinsargsyan96@mail.ru",
              "user_id": "1681648378735000",
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
          "name": "Lusine Sargsyan",
          "birth_date": new Date(1996,05,12),
          "img_url": "",
          "contacts_kay": "lusinsargsyan96@mail.ru",
          "user_id": "1681648378735000"
                  }
      ], function(err, users) {
      if (err) throw err;

      //console.log('Models created: \n', subscribers);
    });
  });

  app.dataSources.mysqlDs.automigrate('tr_user', function(err) {
    if (err) throw err;

    app.models.tr_user.create([
        {
          "name": "Սուրեն Սարգսյան",
          "lg_kay": "arm",
          "user_id": "827603344024096" 
                  },
        {
          "name": "Լուսինե Սարգսյան",
          "lg_kay": "arm",
          "user_id": "1681648378735000"
                  }
      ], function(err, tr_users) {
      if (err) throw err;

      //console.log('Models created: \n', subscribers);
    });
  });

  app.dataSources.mysqlDs.automigrate('contacts', function(err) {
    if (err) throw err;

    app.models.contacts.create([
        {
          "email": "sargsyanapach94@mail.ru",
          "country": "Armenia",
          "district": "Kotayq",
          "city": "Nor Hachn",
          "phone": "+374 43303606"
                  },
        {
          "email": "lusinsargsyan96@mail.ru",
          "country": "Armenia",
          "district": "Lori",
          "city": "Vanadzor",
          "phone": "+374 055485193"
                  }
      ], function(err, contacts) {
      if (err) throw err;

      //console.log('Models created: \n', contacts);
    });
  });

  app.dataSources.mysqlDs.automigrate('tr_contacts', function(err) {
    if (err) throw err;

    app.models.tr_contacts.create([
        {
          "lg_kay": "eng",
          "contact_kay": "lusinsargsyan96@mail.ru",
          "country": "Armenia",
          "district": "Kotayq",
          "city": "Nor Hachn"
                  },
        {
          "lg_kay": "eng",
          "contact_kay": "lusinsargsyan96@mail.ru",
          "country": "Armenia",
          "district": "Lori",
          "city": "Vanadzor"
                  },
        {
          "lg_kay": "arm",
          "contact_kay": "lusinsargsyan96@mail.ru",
          "country": "Հայաստան",
          "district": "Կոտայք",
          "city": "Նոր Հաճն"
                  },
        {
          "lg_kay": "arm",
          "contact_kay": "lusinsargsyan96@mail.ru",
          "country": "Հայաստան",
          "district": "Լոռի",
          "city": "Վանաձոր"
                  }
      ], function(err, tr_contacts) {
      if (err) throw err;

      //console.log('Models created: \n', contacts);
    });
  });

  app.dataSources.mysqlDs.automigrate('language', function(err) {
    if (err) throw err;

    app.models.language.create([
        {"name": "Armenian", "short_name": "arm"},
        {"name": "English", "short_name": "eng"},
      ], function(err, languages) {
      if (err) throw err;

      //console.log('Models created: \n', subscribers);
    });
  });

  app.dataSources.mysqlDs.automigrate('region', function(err) {
    if (err) throw err;

    app.models.region.create([
      //English
        {"district": "Erevan","country": "Armenia", "region_id": 1, "lg_kay": 1},
        {"district": "Kotayq","country": "Armenia", "region_id": 2, "lg_kay": 1},
        {"district": "Gexarquniq","country": "Armenia", "region_id": 3, "lg_kay": 1},
        {"district": "Shirak","country": "Armenia", "region_id": 4, "lg_kay": 1},
        {"district": "Lori","country": "Armenia", "region_id": 5, "lg_kay": 1},
        {"district": "Tavush","country": "Armenia", "region_id": 6, "lg_kay": 1},
        {"district": "Aragatotn","country": "Armenia", "region_id": 7, "lg_kay": 1},
        {"district": "Armavir","country": "Armenia", "region_id": 8, "lg_kay": 1},
        {"district": "Ararat","country": "Armenia", "region_id": 9, "lg_kay": 1},
        {"district": "Vayoc Dzor","country": "Armenia", "region_id": 10, "lg_kay": 1},
        {"district": "Syuniq","country": "Armenia", "region_id": 11, "lg_kay": 1},
        // Հայերեն
        {"district": "Երևան","country": "Հայաստան", "region_id": 1, "lg_kay":2},
        {"district": "Կոտայք","country": "Հայաստան", "region_id": 2, "lg_kay":2},
        {"district": "Գեղարքունիք","country": "Հայաստան", "region_id": 3, "lg_kay":2},
        {"district": "Շիրակ","country": "Հայաստան", "region_id": 4, "lg_kay":2},
        {"district": "Լոռի","country": "Հայաստան", "region_id": 5, "lg_kay":2},
        {"district": "Տավուշ","country": "Հայաստան", "region_id": 6, "lg_kay":2},
        {"district": "Արագածոտն","country": "Հայաստան", "region_id": 7, "lg_kay":2},
        {"district": "Արմավիր","country": "Հայաստան", "region_id": 8, "lg_kay":2},
        {"district": "Արարատ","country": "Հայաստան", "region_id": 9, "lg_kay":2},
        {"district": "Վայոց Ձոր","country": "Հայաստան", "region_id": 10, "lg_kay":2},
        {"district": "Սյունիք","country": "Հայաստան", "region_id": 11, "lg_kay":2},
      ], function(err, countrys) {
      if (err) throw err;

      //console.log('Models created: \n', subscribers);
    });
  });

  // app.dataSources.mysqlDs.automigrate('tr_page', function(err) {
  //   var words = [];
  //   if (err) throw err;
    
  //   words = [
  //           {
  //             "online_barter": "Օնլայն Բարտեր",
  //             "home":"Գլխավոր էջ",

  //           }
  //           ]
  //   app.models.tr_page.create([
  //       {
  //         "lg_kay": 2,
  //         "name":"/home",
  //         "words": JSON.stringify(words[0]),
  //       }
  //       // {
  //       //   "number": "+374 55543806",
  //       //   "log_in":"astx"
  //       // }
  //     ], function(err, tr_pages) {
  //     if (err) throw err;

  //     //console.log('Models created: \n', subscribers);
  //   });
  // });

  app.dataSources.mysqlDs.automigrate('category', function(err) {
    if (err) throw err;

    app.models.category.create([
        {"name": "animals"},
        {"name": "electronics"}
      ], function(err, categories) {
      if (err) throw err;

      //console.log('Models created: \n', subscribers);
    });
  });

  app.dataSources.mysqlDs.automigrate('tr_category', function(err) {
    if (err) throw err;

    app.models.tr_category.create([
        // English
        {"lg_kay": "arm", "name": "Կենդանիներ", "category_kay": "animals"},
        {"lg_kay": "arm", "name": "Էլեկտրոնիկա", "category_kay": "electronics"},

        // Հայերեն
        {"lg_kay": "eng", "name": "animals", "category_kay": "animals"},
        {"lg_kay": "eng", "name": "electronics", "category_kay": "electronics"},

      ], function(err, tr_categories) {
      if (err) throw err;

      //console.log('Models created: \n', subscribers);
    });
  });
};