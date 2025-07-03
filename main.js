    const gameData = {
      "Undertale": {
        text: "РПГ з вибором: можна вбивати, а можна дружити. Гумор, музика, сльози. Made by Toby Fox.",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0f/Undertale_cover.jpg"
      },
      "Hollow Knight": {
        text: "Метроїдванія в темному світі жучків. Атмосфера, геймплей і справжній виклик.",
        image: "https://upload.wikimedia.org/wikipedia/en/0/06/Hollow_Knight_cover.jpg"
      },
      "Enter the Gungeon": {
        text: "Рогалик-шутер з тисячами гармат і хаосом. Пекельний спуск у підземелля.",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3a/Enter_the_Gungeon_art.jpg"
      },
      "Geometry Dash": {
        text: "Аркадна гра про ритм, точність і шалену складність. Мільйони рівнів, створених гравцями.",
        image: "https://upload.wikimedia.org/wikipedia/en/3/30/Geometry_Dash_Logo.PNG"
      },
      "Castle Crashers": {
        text: "Мультяшний beat-em-up з коопом. Рубай, бий, рятуй принцес і прокачуйся.",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Castle_Crashers_cover.png"
      },
      "Minecraft": {
        text: "Спочатку інді, потім Microsoft. Пісочниця, крафт, виживання, творчість. Половина інді.",
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"
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