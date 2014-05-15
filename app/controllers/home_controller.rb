class HomeController < ApplicationController
  def index
    @games = games.sample 5
  end

  private
  def games
    [
      { 
        key: 'technology',
        url: 'https://itunes.apple.com/us/app/technology/id680402946'
      },
      { 
        key: 'country_flags',
        url: 'https://itunes.apple.com/us/app/country-flags/id703990128'
      },
      { 
        key: 'brazilian_football',
        url: 'https://itunes.apple.com/us/app/brazilian-football/id703990144'
      },
      { 
        key: 'anime',
        url: 'https://itunes.apple.com/us/app/anime/id703990158'
      },
      { 
        key: 'dragon_ball',
        url: 'https://itunes.apple.com/us/app/dragon-ball/id726093384'
      },
      { 
        key: 'retro_games',
        url: 'https://itunes.apple.com/us/app/retro-games/id703990173'
      },
      { 
        key: 'vida_de_programador',
        url: 'https://itunes.apple.com/us/app/vida-de-programador/id725437318'
      }
    ]
  end
end
