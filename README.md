# Creating the project

In This Project We Use Pnpm To Install, Run And Manage Dependencies!

1. First Lets Install Node.js:
   
   * Windows
        ```bash
        scoop install nodejs-lts
        ```
2. Enable pnpm From Corepack:
   ```bash
   corepack enable pnpm
   ```

3. Clone This Repo And Run Install To Grab The Dependencies:
    ```bash
    git clone https://github.com/Mehybinator/food-land.git
    ```
    ```bash
    cd food-land
    ```
    ```bash
    pnpm install
    ```
4. After Installation Is Completed, Run The Following Command To View The Project:
    ```bash
    pnpm run dev -- --open
    ```