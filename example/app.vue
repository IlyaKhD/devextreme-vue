<template>
    <div>
        <button-example/>
        <br/>
        <popup-example/>
        <br/>
        <text-box-example/>
        <number-box-example/>
        <br />
        <validation-example/>
        <br/>
        <scroll-view-example/>
        <br/>
        <list-example/>
        <br/>
        <grid-example/>
        <br/>
        <scheduler-example/>
        <br/>
        <chart-example/>
        <br/>
        <accessing-instance-example/>
        <br/>
        <map-example/>
    </div>
</template>

<script>

import AccessingInstanceExample from "./components/accessing-instance-example";
import ButtonExample from "./components/button-example";
import ListExample from "./components/list-example";
import GridExample from "./components/grid-example";
import PopupExample from "./components/popup-example";
import TextBoxExample from "./components/text-box-example";
import MapExample from "./components/map-example";
import NumberBoxExample from "./components/number-box-example";
import ValidationExample from "./components/validation-example";
import SchedulerExample from "./components/scheduler-example";
import ScrollViewExample from "./components/scroll-view-example";
import ChartExample from "./components/chart-example";

export default {
    components: {
        AccessingInstanceExample,
        ButtonExample,
        PopupExample,
        TextBoxExample,
        MapExample,
        NumberBoxExample,
        ValidationExample,
        ListExample,
        GridExample,
        SchedulerExample,
        ScrollViewExample,
        ChartExample
    },
    name: "app"
}
</script>
