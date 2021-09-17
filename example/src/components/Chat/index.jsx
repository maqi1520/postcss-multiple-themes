import React from "react";
import "./style";

export default function Chat() {
  return (
    <div className="chat-area">
      <div className="chat-area-header">
        <div className="chat-area-title">CodePen Group</div>
        <div className="chat-area-group">
          <img
            className="chat-area-profile"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
            alt=""
          />
          <img
            className="chat-area-profile"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
            alt=""
          />
          <img
            className="chat-area-profile"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
            alt=""
          />
          <span>+4</span>
        </div>
      </div>
      <div className="chat-area-main">
        <div className="chat-msg">
          <div className="chat-msg-profile">
            <img
              className="chat-msg-img"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
              alt=""
            />
            <div className="chat-msg-date">Message seen 1.22pm</div>
          </div>
          <div className="chat-msg-content">
            <div className="chat-msg-text">
              Luctus et ultrices posuere cubilia curae.
            </div>
            <div className="chat-msg-text">
              <img src="https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif" />
            </div>
            <div className="chat-msg-text">
              Neque gravida in fermentum et sollicitudin ac orci phasellus
              egestas. Pretium lectus quam id leo.
            </div>
          </div>
        </div>
        <div className="chat-msg owner">
          <div className="chat-msg-profile">
            <img
              className="chat-msg-img"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
              alt=""
            />
            <div className="chat-msg-date">Message seen 1.22pm</div>
          </div>
          <div className="chat-msg-content">
            <div className="chat-msg-text">
              Sit amet risus nullam eget felis eget. Dolor sed viverra
              ipsum😂😂😂
            </div>
            <div className="chat-msg-text">
              Cras mollis nec arcu malesuada tincidunt.
            </div>
          </div>
        </div>
        <div className="chat-msg">
          <div className="chat-msg-profile">
            <img
              className="chat-msg-img"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
              alt=""
            />
            <div className="chat-msg-date">Message seen 2.45pm</div>
          </div>
          <div className="chat-msg-content">
            <div className="chat-msg-text">
              Aenean tristique maximus tortor non tincidunt. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae😊
            </div>
            <div className="chat-msg-text">
              Ut faucibus pulvinar elementum integer enim neque volutpat.
            </div>
          </div>
        </div>
        <div className="chat-msg owner">
          <div className="chat-msg-profile">
            <img
              className="chat-msg-img"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
              alt=""
            />
            <div className="chat-msg-date">Message seen 2.50pm</div>
          </div>
          <div className="chat-msg-content">
            <div className="chat-msg-text">
              posuere eget augue sodales, aliquet posuere eros.
            </div>
            <div className="chat-msg-text">
              Cras mollis nec arcu malesuada tincidunt.
            </div>
          </div>
        </div>
        <div className="chat-msg">
          <div className="chat-msg-profile">
            <img
              className="chat-msg-img"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
              alt=""
            />
            <div className="chat-msg-date">Message seen 3.16pm</div>
          </div>
          <div className="chat-msg-content">
            <div className="chat-msg-text">
              Egestas tellus rutrum tellus pellentesque
            </div>
          </div>
        </div>
        <div className="chat-msg">
          <div className="chat-msg-profile">
            <img
              className="chat-msg-img"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
              alt=""
            />
            <div className="chat-msg-date">Message seen 3.16pm</div>
          </div>
          <div className="chat-msg-content">
            <div className="chat-msg-text">
              Consectetur adipiscing elit pellentesque habitant morbi tristique
              senectus et.
            </div>
          </div>
        </div>
        <div className="chat-msg owner">
          <div className="chat-msg-profile">
            <img
              className="chat-msg-img"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
              alt=""
            />
            <div className="chat-msg-date">Message seen 2.50pm</div>
          </div>
          <div className="chat-msg-content">
            <div className="chat-msg-text">Tincidunt arcu non sodales😂</div>
          </div>
        </div>
        <div className="chat-msg">
          <div className="chat-msg-profile">
            <img
              className="chat-msg-img"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
              alt=""
            />
            <div className="chat-msg-date">Message seen 3.16pm</div>
          </div>
          <div className="chat-msg-content">
            <div className="chat-msg-text">
              Consectetur adipiscing elit pellentesque habitant morbi tristique
              senectus et🥰
            </div>
          </div>
        </div>
      </div>
      <div className="chat-area-footer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-video"
        >
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-image"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-plus-circle"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-paperclip"
        >
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
        </svg>
        <input type="text" placeholder="Type something here..." />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-smile"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-thumbs-up"
        >
          <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
        </svg>
      </div>
    </div>
  );
}
