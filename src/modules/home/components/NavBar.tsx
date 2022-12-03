import { ITEMS_NOTIFICATIONS } from "mock/item_notification.mock"
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai"
import { Outlet } from "react-router-dom"

const NavBar = (): JSX.Element => {
  return (
    <>
      <header className="bg-white sticky top-0">
        <div className="sticky top-0 p-4 border-b border-gray-100 flex items-center justify-between">
          <button className="flex items-center justify-center">
            <AiOutlineMenu />
          </button>
          <div className="flex items-center justify-center gap-10">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Escribe para buscar ..."
              className="min-w-[20rem] rounded-md py-1.5 px-3 border border-gray-200"
              autoComplete="off"
            />
            <div className="flex gap-5">
              {ITEMS_NOTIFICATIONS.map((notification) => {
                return (
                  <button
                    key={notification.id}
                    type="button"
                    className="inline-flex relative items-center p-1.5 text-gray-400 rounded-lg active:bg-gray-100/80  focus:ring-blue-300"
                  >
                    {notification.icon}
                    {notification.count > 0 && (
                      <div className="inline-flex absolute -top-1.5 -right-1 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-red-400 rounded-full">
                        {notification.count}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
            <button className="flex gap-3 justify-center items-center">
              <img
                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1207.jpg"
                alt="Rashad"
                className="rounded-full w-10"
              />
              <div>name</div>
              <AiOutlineDown />
            </button>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default NavBar
