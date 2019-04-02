  $(document).ready(function() {
          $("button").click(function(){
              event.preventDefault();

              var selectedAmenities = [];
              $.each($("input[name='park-item']:checked"), function(){
                  selectedAmenities.push($(this).val());

              });
              if (selectedAmenities.includes("swing")) {
                $("#creston").show();
                $("#fields").show();
              }

              if (selectedAmenities.includes("soccer")) {
                $("#clackamas").show();

              }
              debugger;
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
