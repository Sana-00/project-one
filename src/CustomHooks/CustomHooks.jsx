import { useEffect } from "react";

function useCustomHooks(count) {
  useEffect(() => {
    if (count > 1) {
      document.title = `Chats (${count})`;
    } else {
      document.title = `Chats`;
    }
  }, [count]);
}

export default useCustomHooks;
