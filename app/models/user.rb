class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook, :twitter, :google_oauth2]
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  validates_uniqueness_of :username
  has_many :posts
  extend FriendlyId
  friendly_id :username, use: :slugged
  acts_as_voter
  has_many :favorites
  has_many :favorite_posts, through: :favorites, source: :favorited, source_type: 'Post'
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
    user.avatar = URI.parse(auth.info.image) if auth.info.image? # assuming the user model has an image
    user
  end
end
