import React from "react";

const Contact = () => {
  return (
    <div>
      <form>
        <div class="sm:col-span-4">
      
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="name@email.com"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
