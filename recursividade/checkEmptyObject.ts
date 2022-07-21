function isEmpty(value: any): boolean {
    return (
      value === undefined ||
      value === null ||
      value === 0 ||
      value === "" ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "object" &&
        (Object.values(value!).length === 0 || checkEmptyObject(value)))
    );
  }
  
  export function checkEmptyObject(obj: any): boolean {
    const values = Object.values(obj);
  
    for (let value of values) {
      if (isEmpty(value)) {
        return true;
      }
    }
  
    return false;
  }
  