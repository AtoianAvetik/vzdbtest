import { NavigationActions } from 'react-navigation';
import type {
    NavigationParams,
    NavigationRoute
} from 'react-navigation';

let _container; // eslint-disable-line

function setContainer(container: Object) {
    _container = container;
}

function resetRoutes(index, routes) {
    const actions = routes.map((el) => {
        return NavigationActions.navigate({
                    type: 'Navigation/NAVIGATE',
                    routeName: el
                })
    });
    _container.dispatch(
        NavigationActions.reset({
            index: index,
            actions,
        }),
    );
}

function reset(routeName: string, key = null, params?: NavigationParams) {
    _container.dispatch(
        NavigationActions.reset({
            index: 0,
            key: key,
            actions: [
                NavigationActions.navigate({
                    type: 'Navigation/NAVIGATE',
                    routeName,
                    params
                }),
            ],
        }),
    );
}

function replaceScreen(routeName: string) {
    _container.dispatch({
        type: 'ReplaceCurrentScreen',
        routeName: routeName
    });
}

function removePrevScreen() {
    _container.dispatch({
        type: 'RemovePrevFromStack'
    });
}

function navigate(routeName: string, params?: NavigationParams) {
    _container.dispatch(
        NavigationActions.navigate({
            type: 'Navigation/NAVIGATE',
            routeName,
            params,
        }),
    );
}

function back(key?: string) {
    _container.dispatch(
        NavigationActions.back({
            type: "Navigation/BACK",
            key
        }),
    );
}

function navigateDeep(actions: { routeName: string, params?: NavigationParams }[]) {
    _container.dispatch(
        actions.reduceRight(
            (prevAction, action): any =>
                NavigationActions.navigate({
                    type: 'Navigation/NAVIGATE',
                    routeName: action.routeName,
                    params: action.params,
                    action: prevAction,
                }),
            undefined,
        ),
    );
}

function getCurrentRoute(): NavigationRoute | null {
    if (!_container || !_container.state.nav) {
        return null;
    }

    return _container.state.nav.routes[_container.state.nav.index] || null;
}

export default {
    setContainer,
    navigateDeep,
    navigate,
    reset,
    back,
    getCurrentRoute,
    replaceScreen,
    removePrevScreen,
    resetRoutes
};