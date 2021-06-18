import React from "react";
import moment from "moment";
import CardTag from "./CardTag";
import Avatar from "./Avatar";
function Item({
  name,
  short_desc,
  cover_picture,
  start_time,
  venue,
  fees,
  registered_users,
  card_tags,
  end_time,
  mobile_cover_picture,
}) {
  const { other_users_count, show_users_count, top_users } = registered_users;
  const is_upcoming = moment.now() - end_time * 1000 < 0;

  console.log(is_upcoming);
  const convertUnixToDate = (unixTime) => {
    var dateString = moment.unix(unixTime).format("hh:mm A, d MMM yyyy ");
    return dateString;
  };
  return (
    <div
      className='flex flex-col m-5 bg-white z-10 overflow-hidden cursor-pointer shadow-lg'
      style={{
        backgroundColor: "white",
      }}
    >
      <img
        src={cover_picture}
        srcSet={`${mobile_cover_picture} 300w`}
        height={600}
        className=' object-center'
        style={{ height: "24vh " }}
      />
      <div className='pt-4 pl-4 pr-6'>
        <h4>{name}</h4>
        <div className='flex flex-row justify-start space-x-10 pt-8'>
          <div>
            <h3 className='text-sm text-gray-600'>Starts On</h3>
            <div>{convertUnixToDate(start_time)}</div>
          </div>
          <div>
            <h3 className='text-sm text-gray-600'>Entry Fee</h3>
            <div>{fees === 0 ? "Free" : fees}</div>
          </div>
          <div>
            <h3 className='text-sm text-gray-600'>Venue</h3>
            <div>{venue}</div>
          </div>
        </div>
        <hr className='w-full mt-4' />
        <div className='pt-6 text-sm text-gray-600'>
          <h3>{short_desc}</h3>
        </div>

        <div
          className='flex items-baseline mt-3 '
          style={{ width: "fit-content" }}
        >
          {card_tags
            .slice(0, Math.min(3, card_tags.length))
            .map((card, index) => {
              return <CardTag key={index} name={card} />;
            })}
          <div
            style={{
              color: "rgb(250,115,40)",
            }}
          >
            {card_tags.length > 3 ? (
              <h4>+{card_tags.length - 3} more</h4>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <hr className='w-full mt-4 h-0.5' />
        <div className='Footer'>
          {show_users_count ? (
            <div className='Users menu'>
              <div className='flex'>
                {top_users.map((top_user, index) => {
                  // console.log(top_user);
                  return (
                    <Avatar
                      name={top_user.name}
                      img_url={top_user.image_url}
                      key={index}
                    ></Avatar>
                  );
                })}
              </div>
              <h4>and {other_users_count} others registered</h4>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className='mb-5'>
        {is_upcoming ? (
          <div className='float-right'>
            <img src='./images/register.png' alt='' height={150} width={150} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Item;
