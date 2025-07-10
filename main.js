    const gameData = {
      "Undertale": {
        text: "РПГ з вибором: можна вбивати, а можна дружити. Гумор, музика, сльози. Made by Toby Fox.",
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/db/Undertale_Combat_Example.png/330px-Undertale_Combat_Example.png"
      },
      "Hollow Knight": {
        text: "Метроїдванія в темному світі жучків. Атмосфера, геймплей і справжній виклик.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4fWkvcWiqh4De4C6UjdclHqJ9CIailypKw&s"
      },
      "Enter the Gungeon": {
        text: "Рогалик-шутер з тисячами гармат і хаосом. Пекельний спуск у підземелля.",
        image: "https://images.steamusercontent.com/ugc/2026092994910976635/486DB2EA35B170F181EE5DF4D3ECECF3B7384885/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
      },
      "Geometry Dash": {
        text: "Аркадна гра про ритм, точність і шалену складність. Мільйони рівнів, створених гравцями.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/322170/capsule_616x353.jpg?t=1703006148"
      },
      "Castle Crashers": {
        text: "Мультяшний beat-em-up з коопом. Рубай, бий, рятуй принцес і прокачуйся.",
        image: "https://mgames.ua/upload/catalog_products_photos/images/s_11307netjoylcrwnugvdowwyuruprtqd5xogs6g9mo_kzwtatslxbk2kmdupbeb7xt2dfmty1xt0nc6fxxiixspamu0gewxl1635174814.jpg"
      },
      "Minecraft": {
        text: "Спочатку інді, потім Microsoft. Пісочниця, крафт, виживання, творчість. Половина інді.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFztwMlEU0ETqXVvj9BcCvisLXM4V50rtKfg&s"
      }
    };

    document.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('click', () => {
        const isActive = card.classList.contains('active');

        document.querySelectorAll('.game-card.active').forEach(c => {
          c.classList.remove('active');
          c.querySelector('.card-info').innerHTML = '';
        });

        if (!isActive) {
          const name = card.getAttribute('data-name');
          if (gameData[name]) {
            const { text, image } = gameData[name];
            card.querySelector('.card-info').innerHTML = `
              <p>${text}</p>
              <img src="${image}" alt="${name}">
            `;
            card.classList.add('active');
          }
        }
      });
    });