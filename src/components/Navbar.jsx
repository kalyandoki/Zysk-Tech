import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <nav className="hidden md:flex space-x-8 text-gray-800 font-bold justify-between items-center">
          <div className="hidden md:flex space-x-3 text-gray-600 font-bold justify-between items-center">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUSDxAVEg8VGBUWFRUQFhcQEhYQFhUXFhYVFhUYHSggGBolHBcVIjIhJSkrLjouFx8/ODMuNygtLisBCgoKDg0OFQ8QFy0fHRktLS0uNS01KzctNy8tKy04MDc3Ky0tNy4wKzA3LTU3MCs3LSsuKzY4NSsrNzMrLi03Lv/AABEIAHUBsAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABwgFBgECBAP/xABPEAABAwIDBAQICAoJAwUAAAABAAIDBBEFBxIGEyExNUFRYQgicXJzkbKzFDIzUnSBobEjJUJUYoOTtMHwFyQ0hKLCw9HSFVPTQ2OCkpT/xAAaAQEBAQADAQAAAAAAAAAAAAAAAQIDBAUG/8QAIBEBAQADAAICAwEAAAAAAAAAAAECAxEEMRNBISKREv/aAAwDAQACEQMRAD8Ag1ERARbNsZsNW4q+1MzTE02fNJdsbe4H8p3cO69rqXsJyHoWAGpqZpXjmI9MUZ+qxd9qCvaKz0eTGCjnDI7yzPH3Fdxk5gn5s/8AbS/8kFXkVov6HME/Nn/tpf8AkuBk5gn5s/8AbS/8kFXkVov6HME/Nn/tpf8AkupyawQ/+hIPJNJ/EoKvorI1uRuFPH4N88R7WvDx9Ye0/wAFHG2mT1bQtM1O74XAOJ0N0ysb2llzqA4cR6kEaoiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLZMv9lX4rWMpwS2IePK8fkxDnbvPADy9y1tT54OeHNbTVNQR4z5RHf9CNgd97z6kEsYXh8NLEyGnYI4mCzWt4C38T3r0tPNdP55rqPs8qo+2pcN/37utdFw3/AH6+9EfWw7FwLff966fzzQf79feg+i4Dl0/nmg/nig+l0B4L52/m64byQQNnnsIynd/1CkYGwvdadjeAbK74sgHUHHge+3aVD6uDtnhwqaGphPHXFJa/Gzw0lpt3EA/UqfKKIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiArKZDsthTT86WUny3t/BVrVlcjeio/SS+2VYJCJQFfMIER9brWNpdtIKO7AN7UfMabBvZrd1eTifvXTbraD4HBaM/h5LtZ16QPjPt3XH1kKHnPJJJJJJJJJuSTxJJ6yvQ8Pw5s/fP03jj1tNbt7XyHxZGxN7ImN5d5fc/cvhBtpiLDf4SXDse1jgf8N/tWu3XN1680apOf4n8jk5EmYBmM15DKxgjJ4b2O+i/6TTctHeCfqW+RSBwBBBBAII4gg8iD1hV4ut5y52hcx4pZXExuvuiSfFfzLPIeP1+Vef5fg4zG56/r3GMsfuJQuuAV0C46l5DjdpxdrgesEesKlSum7kfIqXPFiUo6oiKKknJrYmkxZ1SKvefghCWbpwZ8cyXvcG/xQu2c2w9HhPwX4JvPw2/171wf8nutNrAW+O5bF4M/x67zaf75l38JrnQf3r/QQQesrsph7KmtpoJb7uWaKN+k2doe8NNj1GxWKWfy/wCk6H6VT+9agl/bHKDC6ShqaiIz72KJ726pAW6mi4uNPEKAVb7Mroqt9BJ7KqhgOEyVtRHTQ6RLK7S3WdLb2J4kA9iDwIt52oyrxHDqZ9VUOgMTC0Hdvc53juDRYFo6yF6cBycxerjEpZFTNdxaKp7mPLT16GNcW+R1igj1FvO1OVOKYfGZpI2TQtBL30zjIGNHMua5rXW67gECxvZaXSwGR7Y221Pc1ovwF3EAX9aDObJbGVuKbz4Exr91o16ntjtr1abX5/Fcuu1mx1ZhZjbWMawyhxZpe2S4bYG9uXMKeMm9hazCDVfCzEd9udG6cX/E3uq92i3xwumcewVZiz6d1IYgImyB29cWcXlhFrNN/ilBXGkYx0jBI7TGXND3DiWsJGo27hdWzl2Jwf4GYjSU4pQy+80t1Bun5Xf/ABtVuOu6qztLgc2H1MlLUFpmj06t2S5vjMa8WJA6nDqUjS5UbQCAxGrYaUC+6+EymKw8b5PTpQRRIACQ03FzY2tcdRt1LdsKyoxaqhjnhijMUrQ9hMrGktcLi4J4LDbG7JVOKyvhpTGHsYZDvXFg0hzW8CAeN3BWs2Pw2SkoaanltvIomMdoN26mixsesIKeYjRPp5ZIZQBJE98bwDcB7HFrgCOfEFZ7LfA4cQxGClqNW5k3urQdLvEhkeLGx62hbntrlLiTp62tDoNwZKmo+Udr3Rc+Tlo+Np6rrX8k+mqT9f8Au0yDcsz8r8Ow7D5Kmm329a6MDePDm2c8NPDSOoqFFaHPfoebz4feNVXkBFtWyeX2JYmNdNBaC5G+mO7iuOBsebuPDxQVtEuRGLAXE1I4/NbJLc+uID7UEWosrtDs7WYfJuq2B0LzxbqsWuA5lr2ktdzHIrFICLNbMbK1uJPMdHAZLW1uNmRsB63PPAdfDmbGwK3h+RGLBtxLSE2+KJJNXk4xAfagw+UGylNitXJBV692yB0g3Tgw6xJG3iSDws4rOZxZf0WFQQSUm91SSOa7evDxpDb8LAL35E4RUUeLVEFVE6KZtK+7Xdm+hsQRwcO8EhZzwlP7LS+md7tBX5ERBLuUGXVBitJJPV73eMndGN08MGgRxuHAtPG7itZzc2WpsLrWQUuvduhZId44Pdrc+Rp4gDhZoUq+Dh0dP9Kf7mFaL4RfScf0aP3syCLVteWOz8GI4hHTVOrdObITuzpddrC4cbHrC1RSBkT0xD5k3unINqzRyww7DaB9TTb7etfG0bx4c2znWPDSFoGWOz8GI4hHTVOrdPbITuzpddsbnCxsesKdM+uiJPSQ+2FEGRXTEHmTe6cg2rNHLDDsNoH1NNvt618bRvHhzbOdY8NIUKq0GfPREvpIfbCq+gKyeR5/FUfpJfbKrYrJ5IdFR+kl9sqwb8CuNS4K8NY4jkSPIVqTqIwzHrDJWubfhE1jAOq5Gsn/ABD1LV7qRMZoY3OL3Rtc883OaC48LcSefABa5UUrByY31Be5o2yYY4yenLK1+65usvuGfNb6gudwz5jfUF2Pli9Yi6+kMzo3Ne02c0hzT+k03H2hZiKmZ8xvqCzFBh8R5xMPlaD/AAWct8k/MOpLpZg9rXDk4AjyEXX1BWFw1xAAubAAAX4ADkFlo189ljyuF3J4H61TKXmfKVcw8iqZy8z5SsUjoiIoqbfBn+PXebT/AHzLv4TXOg/vX+gungz/AB67zaf75l9PCa50H96/0EEHLP5f9J0P0qn961YBbDl60nFKG35zAfqEjSUFncyuiq30EnsqtuVPS9H6X/K5WSzK6KrfQSeyq25U9L0fpf8AK5BaTaL4MIHSVlvg8Np3X4j8Cd402HOxaDbrIChur8ICTeHc0DdwCbbyQiRzb8CSBZpI6uNu0qQM6nkYLVkGxtCOHYaiIEeolVTQXL2U2ghxKljqoLhkgILXfGa8GzmO8h+y3aqz5kYU3DMXlbA0CJr454m8mhrrSaLDk0O1NA7AFL3g6H8WSfSpPdQqNs/+lnehi+4oJWyk2/qMYNT8IiijEIh07rVx3m8vfU4/MH2rpm1mFU4O+nbBDFIJmyF291XBYWgW0uHzitU8GbnX+Sm/118fCX+VovMn9qNBFm1ePSYjVSVcrGskl0XbHfSNDGsFrknk0K4dX8i/zHeyVSVXaq/kX+Y72SgqTsLtjNhEz54I45HPjMZEuqwaXNdcaSOPihWp2TxR9ZR09TI1rXzRMkcGX0guFyBck2VMlb/Lboqi+jxeyEER7aZw1rZa2h+DwboPqabVaTXuw58Wr41tVvtWq5J9NUn6/wDdplgtuekq76VU++es7kn01Sfr/wB2mQTRnv0PN58PvGqD8qtkxilc2KUH4NGDLNa4uxpADARyLnEDqNtVuSnDPfoebz4feNWn+DNGP6878r+rDvAO+P22HqQSJt5tjTYHSsO7Dnu8SngjtG0hgF+Q8VjRp5DraOtRRQZ91wlBnpad0F+LYg+OQN7nue4X8o9SlrbPZrCa18ZxMt1saRGHzug8UniQA4X4gce5a7/R1sv/AO1/+x//AJEGzYxhtHj2HAcHRTMEkMhHjxyW8Vw7HA3BHnDrVUWYTMakUmm1QZRBpP8A3te7tfzlbXAX4ZQwMpqWohZAzVpaZ2vtqcXni5xPNxP1qDqOOJ21fiFrozVOkBaQ5pcWmS4I4HxuKCd9nsGpsKo2wx2ZDCwukkdw1OAvJK89psT3AAcgFEWNZ+SiYiipIzTg2Dpy7ePb86zSAy/ZxUkZuTujwesLOZja3/4vkYx3+FxVS0FrsvtpqTGR8NZFuq2FjoJGk6i2ORzX8xbUwmMEEjgQ/vvqXhKf2Wl9M73a1jwb53CvqIwfEdTFxH6TJYg0+p7vWtn8JT+y0vpne7QV+REQWM8HDo6f6U/3MK0Xwi+k4/o0fvZlvXg4dHT/AEp/uYVo3hFj8Zx/RY/ezIIsUgZE9MQ+ZN7pyj9SDkSPxxD5k3unIJez66Ik9JD7YUQZFdMQeZN7pyl/ProiT0kPthRBkV0xB5k3unIJgz56Il9JD7YVX1aDPnoiX0kPthVfQFZLJDoqP0kvtlVtVj8kHfipndJL7asSpAK8dS1eq6+UgWoNYxOBazWQLe6uC6wVZQ9y7urZxqVqLo0DFmpaHuXVlD3LtzbGuvDTQrYMNgXSloe5ZyipbLr7dqWvdRMssixeeFll9wV0Mr2sOxKpnJzPlKuU481TNYpBERRUm5BbQMpcQMMrg2OqYI2k8Bv2uvGL993t8rmqZsz9ixi9JumuDKiN2uFzvi6rEFjrcQ1w6x1gHjaxqa0kG4NiORHO6mPYvPGSFjYsTidOGiwnitviByD2OIDz+lcHhxueKDRK7LvGIX6HYfO43teJhmZ5dbLtA8pUm5P5W1NNUNrsRaIzGDuYbhz9bgRrfbg0AE2HO542tx22LOTBCLmpe09joZb/AOFpH2rB7QZ70MbSKKGSol6nSDcw37TfxjbssPKgyue20DKXDXQB34eqIjaBa+7BDpHEdlgG+V4UH5U9L0fpf8rlh9pMfqcRndUVcmuV3AdTGMHJjG/ktFzw7yTckk+nYfF46Kvp6mYOMUT9TtADnWsRwBI7e1BY3O3oWr/UfvMKqqpuzGzXw7EMOnpadk4lk3WkyMa1niTRvNyHk8mnqUIoLIeDn0ZL9Kk91Co3z/6Wd6GL7isrlJmVQ4VRvp6psxkdM+QbpjXN0OZG0cS8cbsK1HNPaWDE641NMHiIxxttKA12pt78ATw4oJA8GZw1Vw67Ux+oGa/3he7whsAq6k0ktNTyTsYJWv3LHSuaXFhbdrQTY2PHlw7wok2F2umwmpFRC0PaQWSRuOlskZINr/kkEAg26usXBneiztwd7NUjpoXdbHxFxv3FhIIQVrqqaSJ7o5WOjkabOZI0se09haeIKurV/Iv8x3slVMzIxmmrsQmqaTWIpNB/CNDDraxrHEAE8Dpvx48VM0+eGEujc0Mqrlpb8mzmRb/uIK5K3uWjgcKorG/4CMfWBY/aFUJSllZmt/0yL4JWRulpASY3RW3kRcbubpJAc0kk8wQSed7AMBmHsvXx19bI6km3JmmmErY3ui3L3ueH7wDTazhfjw435L7ZJ9NUn6/92mUr7QZuYJPSzQl8z97FJGWticHWewt5uIHX2qFMucdhw/EYKqoDjFHvdQjAc/x4ZGCwJA5uHWgnzPfoebz4feNUaeDxjrIK2SmkNhVMGgnrmiu5rfra6T6wB1rJ5m5p4fiVBJTU7JxK50ZBkY1rbNeHG5Dz1DsUMwyuY4PY4te0hzXNJa5rgbggjiCD1oLGZ7bGT18MVTSMMk1PrD42C73xOsbsH5RaR8UcTqPZY19gwmpfJuWU8rpuW7bG4yX80C6mfY7PVgY2PFYnbwADfwAEP73x8NJ723uTyC29+cmCAXFS8n5ohlv9rbfag0HD8g55II3y1rYZ3NBfEYt4GOP5O8EnEgWvYWvfmo2watbh+IxytkEsdPUA64+UkTJLOc2/U5oNvKpD2/zpfVxup8OjfBE8Fr5pCBMWngWsa0kMuOu5PHqUQILoYzQRYhSSQ6gYqiItD2+MNL2+K9vba4I8iqhjOxOJUkzoZaOZzgbB0Ub5Y3jqLHtFnA+vtAPBbllpm4/DoxS1rHT0jfk3Mtvom/MAcQHs7ASCO0iwEmS504KGahNK51r6Gwv1k9l3Wbf60GPyK2JnoIpamrYY55w1rI3Cz2Qt4+OPyXOJHiniNIvx4Dw+Ep/ZaX0zvdrEYdnUx+JOqKqOSOhbBJFDFEBI/ePkidvJLkDUQw+TkL3JOJzgzCosWggjpWzB0cjnu3zWsGkttws48UEVoiIJr8HHaBjHT0MjgHSETQg8NTmttI0dp0hht2Nd2Lcs4Mvn4tGyWmIFZCHANcQ1ssZ46C7qcDcg8vGN+dxWijqpIXtlieWSsIc1zTZzXDiCCpu2Tz4bpDMUgdrFhvqYAh3e+Ikae8tJ7gEEYvy+xgSbs4dUau0Rl0f7QeJ9qmnJrLebDS+rrdIqnt0Mjade6jJBcXOHAvJAHC9gOZ1WGVGceB2v8Kdfs3Mt/ZstX2nz4ga0tw2nfJJyElQAyMfpBgJc7yHSg7eEbtAxsENCx34V7xNIB1RMDmtDvOcbj0ZWg5FdMQeZN7py0nE8RmqpXz1EjpJpDqe93Mn7gALAAcAAAOAWfyz2hhw3EI6qoDzExsgIjAc67o3NFgSOs9qCd8+eiJfSQ+2FV9TRmfmlh+JUD6anZOJXPjcDKxrW2a654h5+5QugKf8AIOq1UEkfXHO7/wCrmMI+3UoAW+5P7UNoKsxzHTT1AaxzjybICd24ns8ZwPnX6lYLG3QrrdLrTLo9l15Jqa69q4IVl4rDvoh2Lq2hHYswWJoW/kp14YaWy9kcdl3DV2WLl0dgubrpdc3UR5caqxDTzSuNhHHI8nuawn+CqCp8zt2pbBTfAo3fh5wNdubIAeN+9xFvJqUBrNWCIiiiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAuVwiCUdgc130rW09eHSwCwZK3jLG3lZwPx2j1i3XwAlzDNq8PqQDBWQuvbxS8Mfx7WOs4epVSXKvU4uC2oYeT2nyOBXbWO0etU8RXpxcTWO0etNY7R61TtE6cXD1jtHrXBmaObgPKQqeonTi29XjNLCLzVMMY7XyMb95Wg7XZvUsDSyg/rE/EayCIGHt42Lz3Dh3qBkU6cejEK6WokfNO8ySvOpzncyf4DqAHAALzIiiiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg/9k="
              alt="Logo"
              className="w-200 h-10 rounded-sm"
            />
          </div>
          <a href="#" className="hover:text-blue-500 transition duration-200">
            Home
          </a>
          <div className="md:flex text-gray-600 font-bold items-center">
            <a href="#" className="hover:text-blue-500 transition duration-200">
              Product
            </a>
            <SlArrowDown className="mt-1 ml-2 md:text-sm" />
          </div>
          <div className="md:flex text-gray-600 font-bold items-center">
            <a href="#" className="hover:text-blue-500 transition duration-200">
              Resources
            </a>
            <SlArrowDown className="mt-1 ml-2 md:text-sm" />
          </div>
          <a href="#" className="hover:text-blue-500 transition duration-200">
            Pricing
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-Rvo9KTT9peDF34ZjXAFsCmViEPt6~ShOTlYZ2aVIlOzuaUQUjatnqmAomM2wTrCV6Q-~9AROnL25BQTq4oBgfpq7lVckGxk1Pmh7Urp3FZ2i9f5HAJ8mbhk~VTC~hj~EQd8pN~9fLaTnjLQWQEUjA0BbC0soI2aP5e0sSquvyVYsdTMdKtCuxYiPT7q3ofDmLNy2t1NpGonxllTQiOvrzTUkidzzbJyYV6Zh6HsgesUl~63jNabEb6sVJK5299p5hbkmo0PRBctmVQrq3cyQLH1HbniWfP55TiraL3KqIYf5P~fnTqF-CPQpdvTcmTdMFDuXXjQqkEScX3HXqHHg__"
              alt="Profile"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <button
          onClick={() => setMobile(!mobile)}
          className="md:hidden text-gray-600 hover:text-blue-500 focus:outline-none"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {mobile && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-2 space-y-2 text-gray-600">
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-200"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-200"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-200"
              >
                Pricing
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
