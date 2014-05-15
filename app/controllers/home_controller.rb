class HomeController < ApplicationController
  def index
    @games = games.sample 4
  end

  private
  def games
    [
      { 
        image: 'technology.png',
        title: 'Technology?',
        sub: 'bla bla bla',
        description: '',
        url: ''
      },
      { 
        image: 'country_flags.png',
        title: 'Country Flags?',
        sub: 'ble ble ble',
        description: '',
        url: ''
      },
      { 
        image: 'brazilian_football.png',
        title: 'Brazilian Footbal?',
        sub: '',
        description: '',
        url: ''
      },
      { 
        image: 'anime.png',
        title: 'Anime?',
        sub: '',
        description: '',
        url: ''
      },
      { 
        image: 'dragon_ball.png',
        title: 'Dragon Ball?',
        sub: '',
        description: '',
        url: ''
      },
      { 
        image: 'retro_games.png',
        title: 'Retro Games?',
        sub: '',
        description: '',
        url: ''
      },
      { 
        image: 'vida_de_programador.png',
        title: 'Vida de Programador?',
        sub: '',
        description: '',
        url: ''
      }
    ]
  end
end
