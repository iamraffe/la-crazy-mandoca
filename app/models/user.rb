class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook, :twitter, :google_oauth2]
  validates_uniqueness_of :username
  def self.new_with_session(params, session)
    super.tap do |user|
      # if data = session["devise.omniauth_data"] && session["devise.omniauth_data"]["extra"]["raw_info"]
      if data = session["devise.omniauth_data"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end
  def self.from_omniauth(auth)
    user = where(provider: auth.provider, uid: auth.uid).first || where(:email => auth.info.email).first || new


    user.provider = auth.provider
    user.uid = auth.uid
    user.email = auth.info.email
    user.password = Devise.friendly_token[0,20]
    user.username = auth.info.name   # assuming the user model has a name
    user.image = auth.info.image # assuming the user model has an image
    user
  end
end
