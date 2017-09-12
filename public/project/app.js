(function() {
    angular
        .module("TestApp", [])
        .controller("TestController", TestController);

    function TestController($scope) {
        $scope.count = 7;
        $scope.videoId="7nol7e9HJXg";
        $scope.videoUrl="";

        $scope.onButtonClick = function(vid) {
            console.log("button clicked: " + vid);
            $scope.videoUrl="/api/youtube/" + vid;
            console.log($scope.videoUrl);
            var audio = document.getElementsByClassName("audioTag")[0];
            audio.load();
            audio.play();
        }

        $scope.onButtonPlayPause = function() {
            var audio = document.getElementsByClassName("audioTag")[0];
            audio[audio.paused?'play':'pause']();
        }


    }

})();