import { useLocation } from "react-router-dom";

export default function ServeLink (first) {
  var defaultlink;
  var link = useLocation();

  const christian = [
    {
        main : "christian",
        sub : [
            {href : "about"},
            {href : "tech"},
            {href : "other"},
            {href : "hobbies"},
        ]
    }
  ];

  if(link.pathname.includes("/"+first+"/"))
  {
    return defaultlink;
  }
  else {
    outer: for (let i = 0; i < christian.length; i++) {
             for (let j = 0; j < christian[i].sub.length; j++) {
            if (
              (
                "/" +
                christian[i].main +
                "/" +
                christian[i].sub[j].href
              ).includes("/"+first)
            ) {
              defaultlink =
                "/" +
                christian[i].main +
                "/" +
                christian[i].sub[j].href
              break outer;
            }
      }
    }
    return defaultlink;
  }
  
}
