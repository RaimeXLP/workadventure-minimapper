# workadventure-minimapper
an addon to workadveture for a simple minimap button

## installation

paste the minimapper-Folder in the Folder 
```
./src/
```

in the vite.cofig.ts add the following line:

```
export default defineConfig({
  build: {
        rollupOptions: {
            input: {
              ...
                minimapper: "./src/minimapper/index.html",
              ...
```

## note

the Minimaps have to be Exported fron the Tiled Map-Editor into:

```
./public/src/maps/
```
the Maps must have the __same Name__ as their .tmj or .json counterparts! For Example:

```
./maps/map.json
./public/src/maps/map.png
```
or

```
./maps/myMap.tmj
./public/src/maps/myMap.png
```

## usage

impor the function from minimapper.ts:

```
import minimapper from "../src/minimapper/minimapper.ts";
```


in your map script paste the following code into __after initialising the Workadveture API__:

```
minimapper();
```
## todo

- custom Image import
