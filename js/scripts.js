  $(document).ready(function() {
          $("#reload").click(function(){
            location.reload(true);
          });
          $("button").click(function(){
              event.preventDefault();

              $("#output").show();

              var selectedAmenities = [];
              $.each($("input[name='park-item']:checked"), function(){
                  selectedAmenities.push($(this).val());

              });
              if (selectedAmenities.includes("playground")) {
                $("#fields").show();
                $("#lovejoy").show();
                $("#couch").show();
                $("#elizabeth").show();
                $("#sellwood").show();
                $("#clackamas").show();
              }

              if (selectedAmenities.includes("swing")) {
                $("#fields").show();
                $("#lovejoy").show();
                $("#couch").show();
                $("#elizabeth").show();
                $("#sellwood").show();
                $("#creston").show();
                $("#clackamas").show();
              }

              if (selectedAmenities.includes("picnic")) {
                $("#fields").show();
                $("#lovejoy").show();
                $("#couch").show();
                $("#elizabeth").show();
                $("#creston").show();
                $("#clackamas").show();
              }

              if (selectedAmenities.includes("baseball")) {
                $("#fields").show();
                $("#lovejoy").show();
                $("#elizabeth").show();
                $("#sellwood").show();
                $("#creston").show();
                $("#clackamas").show();
              }

              if (selectedAmenities.includes("basketball")) {
                $("#fields").show();
                $("#lovejoy").show();
                $("#couch").show();
                $("#elizabeth").show();
                $("#sellwood").show();
                $("#creston").show();
                $("#clackamas").show();
              }

              if (selectedAmenities.includes("tennis")) {
                $("#fields").show();
                $("#couch").show();
                $("#elizabeth").show();
                $("#sellwood").show();
                $("#creston").show();
                $("#clackamas").show();
              }

              if (selectedAmenities.includes("soccer")) {
                $("#lovejoy").show();
                $("#couch").show();
                $("#elizabeth").show();
                $("#sellwood").show();
                $("#creston").show();
                $("#clackamas").show();
              }

              if (selectedAmenities.includes("discgolf")) {
                $("#pier").show();
              }

              if (selectedAmenities.includes("skatepark")) {
                $("#burnside").show();
                $("#pier").show();
              }


              //
              // if (selectedAmenities.includes("picnic")) {
              //   alert("true");
              //   $("#creston").show();
              //
              // }
              //
              // if (selectedAmenities.includes("baseball")) {
              //   alert("true");
              //   $("#creston").show();
              //
              // }
              //
              // if (selectedAmenities.includes("tennis")) {
              //   alert("true");
              //   $("#creston").show();
              //
              // }
              //
              // if (selectedAmenities.includes("soccer")) {
              //   alert("true");
              //   $("#creston").show();
              //
              // }
              //
              // if (selectedAmenities.includes("swing")) {
              //   alert("true");
              //   $("#creston").show();
              //
              // }
              //alert("My favourite sports are: " + selectedAmenities.join(", "));
          });
      });
