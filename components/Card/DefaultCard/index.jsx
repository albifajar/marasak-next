import Image from 'next/image'

export const DefaultCard = ({ url_image, type, title, lessIngredient, cookingTime }) => {
  return (
    <div className="w-full rounded-lg">
      <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
        {/* to do make default image when image is null */}
        <Image
          src={`${url_image ? url_image : '/static/images/default-image-not-found.png'}`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="image"
          className="absolute"
        />
      </div>
      <div className="py-2">
        <h1 className="font-semibold line-clamp-2">{title}</h1>
        <div className="flex flex-col mt-2 mb-1 space-y-2">
          <div className="flex items-center justify-start gap-3">
            <span className="text-sm capitalize">{type}</span>
            {cookingTime && (
              <svg width="6" height="6" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.46 3.468C2.052 3.468 1.704 3.328 1.416 3.048C1.136 2.76 0.996 2.412 0.996 2.004C0.996 1.588 1.136 1.24 1.416 0.96C1.704 0.672 2.052 0.528 2.46 0.528C2.876 0.528 3.228 0.672 3.516 0.96C3.804 1.24 3.948 1.588 3.948 2.004C3.948 2.412 3.804 2.76 3.516 3.048C3.228 3.328 2.876 3.468 2.46 3.468Z"
                  fill="#9FA5C0"
                />
              </svg>
            )}

            <p className="text-sm">{cookingTime}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
